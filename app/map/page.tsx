
import React, { useEffect, useState } from 'react'
import Map from "@/components/map"


function page() {
     

  //   const initMap = async () => {
  //     const mapOptions = {
  //       center: new naver.maps.LatLng(37.3595704, 127.105399),
  //       zoom: 10,
  //     };

  //     return new naver.maps.Map('map', mapOptions);
  //   };

  //   if (window.naver && window.naver.maps) {
  //     initMap();
  //     console.log("Dfkdjfkdjslkdjflsk")
  //   } else {
  //     const mapScript = document.createElement('script');
  //     mapScript.onload = () => initMap();
  //     mapScript.src = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_MAP_KEY}`;
  //     document.head.appendChild(mapScript);
  //   }
  // }, []);

  return (
    <div>
       <Map />
    </div>
  );
}

export default page;
