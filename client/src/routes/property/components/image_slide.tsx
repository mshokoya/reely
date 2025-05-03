import { observer, useObservable } from "@legendapp/state/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// TODO: fix images in carousel component
export const ImageSlider = observer(({imagesSrc}: {imagesSrc: string[]}) => {
  const idx = useObservable(0);

  const handleClick = (direction: 'l'|'r') => {
    const position = idx.peek()
    const lastSrcIdx = imagesSrc.length - 1
    if (direction === 'r') {
      return position === lastSrcIdx ? idx.set(0) : idx.set(position + 1)
    } else {
      return position === 0 ? idx.set(lastSrcIdx) : idx.set(position - 1)
    }
  }

  return (
    <section >
      <div className='relative h-[450px] w-full'>
        <img className='object-cover h-full' src={imagesSrc[idx.get()]} alt="Property Image" />
        <span className='absolute top-1/2 left-5' onClick={() => handleClick('l')}><ArrowLeft/></span>
        <span className='absolute top-1/2 right-5' onClick={() => handleClick('r')}><ArrowRight/></span>
      </div>
    </section>
  )
})
