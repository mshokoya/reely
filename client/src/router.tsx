import { createRouter } from '@tanstack/react-router'
import { rootTree } from './routes/root'

export const router = createRouter({ routeTree: rootTree })