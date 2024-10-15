import { useEffect, useState } from "react";
import axios from "axios";

// Define interfaces for the expected data structure
interface ArtistImage {
  url: string;
}

interface Artist {
  id: string;
  name: string;
  images: ArtistImage[];
}

interface TopArtistsResponse {
  items: Artist[];
  total: number;
  limit: number;
  offset: number;
  href: string;
}

function Content({ accessToken }: { accessToken: string }) {
  const [data, setData] = useState<TopArtistsResponse | null>(null); // Initialize as null

  useEffect(() => {
    if (accessToken) {
      axios
        .get('https://api.spotify.com/v1/me/top/artists?limit=5&time_range=short_term', {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((response) => {
          console.log(response.data); // Log the response data
          setData(response.data); // Set the data from the response
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
    }
  }, [accessToken]);

  // Handle the case where data is null
  if (!data) {
    return <div>Loading the data</div>; // or a loading spinner
  }

  return (
    <>
      <p className="text-xs">Top 5 Artist Last Month</p>
      <div className="grid grid-cols-4 grid-rows-3 gap-2">
        {/* Grid Item 1 (larger block) */}
        <div
          className="relative col-span-4 h-[170px] w-[300px] shadow-md"
          style={{
              backgroundImage: `url(${data.items[0]?.images[0]?.url})`, // Use optional chaining
              backgroundSize: 'cover',
              backgroundPosition: 'top',
          }}
        >
          <div className="relative h-full z-10">
              <h1 className="absolute top-5 left-5 font-black text-2xl">#1</h1>
              <p className="absolute bottom-5 right-5 text-white text-lg font-bold">{data.items[0]?.name}</p>
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-md opacity-50"></div>
        </div>

        {/* Grid Item 2 */}
        <div className="relative col-span-2 rounded-md shadow-md"
        style={{
          backgroundImage: `url(${data.items[1]?.images[0]?.url})`, // Use optional chaining
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        >
          <div className="relative h-full z-10">
              <h1 className="absolute top-3 left-3 font-black text-2xl">#2</h1>
              <p className="absolute bottom-1 right-1 text-white font-bold">{data.items[1]?.name}</p>
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-md opacity-50"></div>
        </div>

        {/* Grid Item 3 */}
        <div className="relative col-span-2 rounded-md shadow-md"
        style={{
          backgroundImage: `url(${data.items[2]?.images[0]?.url})`, // Use optional chaining
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        >
          <div className="relative h-full z-10">
              <h1 className="absolute top-3 left-3 font-black text-2xl">#3</h1>
              <p className="absolute bottom-1 right-1 text-white font-bold">{data.items[2]?.name}</p>
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-md opacity-50"></div>
        </div>

        {/* Grid Item 4 */}
        <div className="relative col-span-2 rounded-md shadow-md"
        style={{
          backgroundImage: `url(${data.items[3]?.images[0]?.url})`, // Use optional chaining
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        >
          <div className="relative h-full z-10">
              <h1 className="absolute top-3 left-3 font-black text-2xl">#4</h1>
              <p className="absolute bottom-1 right-1 text-white font-bold">{data.items[3]?.name}</p>
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-md opacity-50"></div>
        </div>

        {/* Grid Item 5 */}
        <div className="relative col-span-2 rounded-md shadow-md"
        style={{
          backgroundImage: `url(${data.items[4]?.images[0]?.url})`, // Use optional chaining
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        >
          <div className="relative h-full z-10">
              <h1 className="absolute top-3 left-3 font-black text-2xl">#5</h1>
              <p className="absolute bottom-1 right-1 text-white font-bold">{data.items[4]?.name}</p>
          </div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent rounded-md opacity-50"></div>
        </div>
      </div>
    </>
  );
}

export default Content;
