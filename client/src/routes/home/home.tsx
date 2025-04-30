export const Home = () => {
  return (
    <div>
    <header className='h-[calc(100vh-2.5rem)] bg-amber-950 flex justify-center items-center'>
      <div className='text-center w-1/3 font-medium'>
        <h1 className='text-4xl'>Start your journey to finding the perfect place to call home</h1>
        <h3>Explore a wide range of rental properties tailored to fit your lifestyle and needs!</h3>
        <form>
        <input placeholder='Search by city, neighbourhood or address' />
        <button>Search</button>
        </form>
      </div>
    </header>
    <section>
      <div>
        <h3>Quickly find the home you want using out effective search filter</h3>
        <div>
          <div>img 1</div>
          <div>img 2</div>
          <div>img 3</div>
        </div>
      </div>
    </section>
    <section>
      <div>
        <div>
          <h2>Discover</h2>
          <h3>Find Your Dream Rental Property Today</h3>
          <p>dsadsa asd asdsad sd assd sad asd asd asdas dsdsa dsad sad asdasd asd asd asd asd asd asdasd asdsa dsad ewqradsew fweasd</p>
        </div>
        <div>
          <div>img 1</div>
          <div>img 2</div>
          <div>img 3</div>
        </div>
      </div>
    </section>
    <section>
      <div>Find Your Dream Rental Property</div>
      <div>
        <p>Discover a wide range of rental properties in your desired location</p>
        <div>
          <button>Search</button>
          <button>Sign Up</button>
        </div>
      </div>
    </section>
    <footer>
      <div>
        <div>Logo</div>
        <div>
          <button>About Us</button>
          <button>Contact Us</button>
          <button>FAQ</button>
          <button>Terms</button>
          <button>Privacy</button>
        </div>
      </div>
    </footer>
    </div>
  )
  
}