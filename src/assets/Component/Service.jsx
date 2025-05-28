import ServiceBox from '../Component/ServiceBox';
import Service_Images from "../Images1/Service_Images.svg"
import branding from "../Images1/branding.svg"
import star from "../Images1/star.svg"
import global from "../Images1/global.svg"

export default function Service() {
    return (
        <section className="service pb-[100px] md:pb-[140px] 2xl:pb-[200px] px-4 scroll-mt-[130px]" id="services" >
            <div className="container max-w-[100%] lg::max-w-[1030px] mx-auto">
                <div className="service_heading text-center pb-10 sm:pb-12 md:pb-[35px]">
                    <h3 className="title px-4 py-2 inline-block border border-[#757575] text-[#757575] rounded-xl font-prime text-base sm:text-lg leading-7">
                        Lorem Ipsumx
                    </h3>
                    <h4 className="subtitle text-3xl sm:text-4xl md:text-5xl font-prime font-bold text-[#171717] mt-4">
                        Weeknd Services
                    </h4>
                    <p className="heading_detail text-[#606060] text-base sm:text-lg font-prime leading-7 mt-4">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>

                <ServiceBox
                    title="Branding"
                    description="Brand Strategy, Brand Positioning, Naming Identity, Brand Storytelling, Brand Guidelines, Brand Assets"
                    iconSrc={branding}
                    imageSrc={Service_Images}
                />

                <ServiceBox
                    title="UI/UX Design"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    iconSrc={star}
                    imageSrc={Service_Images}
                />

                <ServiceBox
                    title="Event Design"
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    iconSrc={global}
                    imageSrc={Service_Images}
                />
            </div>
        </section>
    );
}
