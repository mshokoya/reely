import { propertyRoute } from "."
import { Overview } from "./components/overview";
import { ImageSlider } from "./components/image_slide";
import { Details } from "./components/details";
import { Location } from "./components/location";

export const Property = () => {
  const property = propertyRoute.useLoaderData() as PropertiesSchema;

  return (
    <div>
      <ImageSlider imagesSrc={property.photoUrls} />
      <div className='px-30 lg:px-50'>
        <div>
          <Overview property={property} />
          <Details property={property} />
          <Location property={property} />
        </div>
        
      </div>
    </div>
  )
}