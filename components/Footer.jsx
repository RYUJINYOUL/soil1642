import Image from "next/image";

const Footer = () => {


return (
     
    <section className="bg-black">
    <div className="md:h-[100px] h-[100px] md:py-8 py-3 px-4 sm:px-6 md:flex flex-row justify-start md:items-center md:justify-between lg:px-8">
        <div className="mt-0 md:mt-0 ">
            <p className="text-center text-base text-white">
               흙광고기획@
            </p>
        </div>
        <div className="md:mt-8 mt-4 md:mb-8 flex justify-center space-x-6 ">
            <a href="https://section.blog.naver.com/BlogHome.naver?directoryNo=0&currentPage=1&groupId=0" className="text-white hover:text-gray-200">
        
                <Image
                          alt="mediaItem"
                          className="object-cover"
                          width={32}
                          height={32}
                          
                          src={"/Image/blog.svg"}
                        />  
            </a>

            <a href="https://section.cafe.naver.com/ca-fe/home" className="text-white hover:text-gray-200">
        
            <Image
                          alt="mediaItem"
                          className="object-cover"
                          width={30}
                          height={30}
                          
                          src={"/Image/cafe.png"}
                        />  
            </a>

            <a href="https://www.band.us/ko" className="text-white hover:text-gray-200">
         
            <Image
                          alt="mediaItem"
                          className="object-cover"
                          width={29}
                          height={29}
                          
                          src={"/Image/band.svg"}
                        />  
            </a>

            <a href="https://www.facebook.com/?locale=ko_KR" className="text-white hover:text-gray-200">
         
            <Image
                          alt="mediaItem"
                          className="object-cover"
                          width={30}
                          height={30}
                          
                          src={"/Image/Facebook.png"}
                        />  
            </a>
        </div>
    </div>
</section>
 )
}

export default Footer;