import { useEffect } from "react";

const TwitterElement = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        document.getElementsByClassName("twitter-embed")[0].appendChild(script);
      }, []);

    return (
        <section className="twitter-container">
            <div className="twitter-embed">
                <a 
                    className="twitter-timeline" 
                    data-height="500"
                    data-theme="dark" 
                    data-tweet-limit="5"
                    href="https://twitter.com/fbgeekalex?ref_src=twsrc%5Etfw"
                >
                    Tweets by fbgeekalex
                </a>
            </div>
        </section>
    )
};

export default TwitterElement;