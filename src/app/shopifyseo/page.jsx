import DigitalMarketingServices from "@/components/digitalmarketingservices/Digital-Marketing-Services";
import ImproveSEOonShopify from "./ImproveSEOonShopify";

const Page = () => {
    return (
        <>
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                        h4 {
                            text-align: center;
                            font-size: 20px;
                            font-family: "ProximaNova-Extrabld", Arial;
                            color: #576c2c;
                        }
                        .title_sections {
                            text-align: left;
                        }
                        li::marker {
                            color: #576c2c;
                        }
                        .list-design-wrap {
                            max-width: 960px;
                            margin: 0 auto;
                            margin-bottom: 20px;
                        }
                    `
                }}
            />
            <div className="pd_top_70" />
            <DigitalMarketingServices />
            <ImproveSEOonShopify />
        </>
    );
};

export default Page;
