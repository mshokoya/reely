import { resourceFromAttributes } from '@opentelemetry/resources';
import { ATTR_SERVICE_NAME, ATTR_SERVICE_VERSION } from '@opentelemetry/semantic-conventions';
import * as opentelemetry from '@opentelemetry/sdk-node';
import { HttpInstrumentation } from '@opentelemetry/instrumentation-http';
import { ExpressInstrumentation } from '@opentelemetry/instrumentation-express';
import { MongoDBInstrumentation } from '@opentelemetry/instrumentation-mongodb';
import { OTLPTraceExporter } from '@opentelemetry/exporter-trace-otlp-http';
import { OTLPMetricExporter } from '@opentelemetry/exporter-metrics-otlp-proto';
import { PeriodicExportingMetricReader } from '@opentelemetry/sdk-metrics';

export function setupTracing() {
  envCheck();

  const exporter = new OTLPTraceExporter({ url: process.env.OTEL_TRACE_URL });
  const metrics = new PeriodicExportingMetricReader({
    exporter: new OTLPMetricExporter({
      url: process.env.OTEL_METRIC_URL,
      headers: {},
    }),
  });

  const sdk = new opentelemetry.NodeSDK({
    metricReader: metrics,
    traceExporter: exporter,
    instrumentations: [
      new HttpInstrumentation(),
      new ExpressInstrumentation(),
      new MongoDBInstrumentation(),
      // getNodeAutoInstrumentations(),
    ],
    resource: resourceFromAttributes({
      [ATTR_SERVICE_NAME]: process.env.APP_NAME,
      [ATTR_SERVICE_VERSION]: process.env.APP_VERSION,
    }),
  });

  process.on('SIGTERM', () => {
    sdk
      .shutdown()
      .then(() => console.log('Tracing terminated'))
      .catch((error) => console.log('Error terminating tracing', error))
      .finally(() => process.exit(0));
  });

  return {
    start: () => {
      sdk.start();
    },
  };
}

function envCheck() {
  if (!process.env.OTEL_TRACE_URL) {
    throw new Error('[ERROR][setProvider]: process.env.OTEL_TRACE_URL is not defined');
  }
  if (!process.env.OTEL_METRIC_URL) {
    throw new Error('[ERROR][setProvider]: process.env.OTEL_METRIC_URL is not defined');
  }
  if (!process.env.APP_NAME) {
    throw new Error('[ERROR][setProvider]: process.env.APP_NAME is not defined');
  }
  if (!process.env.APP_VERSION) {
    throw new Error('[ERROR][setProvider]: process.env.APP_VERSION is not defined');
  }
}

// new HttpInstrumentation({
//   requestHook: (span, request) => {
//     span.setAttribute("custom request hook attribute", "request");
//   },
// }),
