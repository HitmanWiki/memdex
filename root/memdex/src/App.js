import React, {
    useState,
    useRef,
    useEffect
} from 'react';
import {
    FaTelegramPlane,
    FaTwitter
} from 'react-icons/fa';

import './App.css';

// TeamMember component definition
const TeamMember = ({
    name,
    role,
    image
}) => {
    return ( <
        div className = "team-member" >
        <
        img src = {
            image
        }
        alt = {
            name
        }
        className = "team-member-image" / >
        <
        h3 > {
            name
        } < /h3> <
        p > {
            role
        } < /p> <
        /div>
    );
};

function App() {
    const [contentVisible, setContentVisible] = useState(false);
    const audioRef = useRef(null);

    const MemeCarousel = () => {
        const memes = [{
                src: '/memes/meme1.jpg',
                alt: 'Meme 1'
            },
            {
                src: '/memes/meme2.jpg',
                alt: 'Meme 2'
            },
            {
                src: '/memes/meme3.jpg',
                alt: 'Meme 3'
            },
        ];

        const [currentMeme, setCurrentMeme] = useState(0);
        const [selectedMeme, setSelectedMeme] = useState(null);

        useEffect(() => {
            const interval = setInterval(() => {
                setCurrentMeme((prevMeme) => (prevMeme + 1) % memes.length);
            }, 3000); // Change meme every 3 seconds

            return () => clearInterval(interval); // Cleanup interval on component unmount
        }, []);

        const handleImageClick = (meme) => {
            setSelectedMeme(meme);
        };

        const handleClosePopup = () => {
            setSelectedMeme(null);
        };

        useEffect(() => {
            if (audioRef.current) {
                audioRef.current.loop = true;
            }
        }, []);

        const copyToClipboard = () => {
            const address = document.getElementById('contract-address').textContent.trim();
            navigator.clipboard
                .writeText(address)
                .catch(() => fallbackCopy(address));
        };

        const fallbackCopy = (text) => {
            const textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.style.position = 'fixed';
            textarea.style.opacity = '0';
            document.body.appendChild(textarea);
            textarea.focus();
            textarea.select();
            try {
                document.execCommand('copy');
            } catch (err) {
                console.error('Failed to copy address using fallback:', err);
            }
            document.body.removeChild(textarea);
        };

        const enterMemDex = () => {
            setContentVisible(true);

            if (audioRef.current) {
                audioRef.current.play().catch((error) => {
                    console.error("Audio playback failed:", error);
                });
            }
        };

        return ( <
            div > {!contentVisible && ( <
                    div className = "image-container" >
                    <
                    img id = "warningButton"
                    src = "/images/warning.jpg"
                    alt = "Warning Image" /
                    >
                    <
                    button id = "enterButton"
                    className = "enter-button"
                    onClick = {
                        enterMemDex
                    } >
                    Enter <
                    /button> <
                    /div>
                )
            }

            {
                contentVisible && ( <
                    div id = "content"
                    className = "content" >
                    <
                    header >
                    <
                    img src = "/images/banner.jpg"
                    alt = "MemDex Cryptocurrency Logo" /
                    >
                    <
                    /header>

                    <
                    div className = "social-media-container" >
                    <
                    a href = "https://t.me/memdex100"
                    target = "_blank"
                    rel = "noopener noreferrer"
                    className = "tg-icon" >
                    <
                    FaTelegramPlane size = {
                        30
                    }
                    /> <
                    /a> <
                    a href = "https://x.com/memdex100"
                    target = "_blank"
                    rel = "noopener noreferrer"
                    className = "tg-icon" >
                    <
                    FaTwitter size = {
                        30
                    }
                    /> <
                    /a> <
                    a href = "https://www.coingecko.com/en/coins/memdex100?utm_source=screenshot&utm_medium=app"
                    target = "_blank"
                    rel = "noopener noreferrer" >
                    <
                    img src = "/images/CoinGecko.svg"
                    alt = "CoinGecko"
                    className = "social-icon" / >
                    <
                    /a> <
                    /div>


                    <
                    div className = "contract-container" >
                    <
                    a href = "https://dexscreener.com/solana/83iBDw3ZpxqJ3pEzrbttr9fGA57tttehDAxoFyR1moon"
                    target = "_blank"
                    rel = "noopener noreferrer" >
                    <
                    span id = "contract-address"
                    className = "contract-address" >
                    83 iBDw3ZpxqJ3pEzrbttr9fGA57tttehDAxoFyR1moon <
                    /span> <
                    /a> <
                    button className = "copy-button"
                    onClick = {
                        copyToClipboard
                    } >
                    Copy <
                    /button> <
                    /div>

                    <
                    section id = "meet-the-team"
                    className = "meet-the-team" >
                    <
                    h2 > Meet the Team < /h2> <
                    div className = "team-members" >
                    <
                    TeamMember name = "Peter Schiff"
                    role = "Chief Piss Officer"
                    image = "/images/PeterSchiff.jpg" /
                    >
                    <
                    TeamMember name = "Sam Bankman"
                    role = "Financial Manager"
                    image = "/images/SamBankman.jpg" /
                    >
                    <
                    TeamMember name = "Richard Heart"
                    role = "Shill-lord/ Taxes"
                    image = "/images/RichardHeart.jpg" /
                    >
                    <
                    TeamMember name = "Andrew Tate"
                    role = "Human Resources"
                    image = "/images/AndrewTate.jpg" /
                    >
                    <
                    /div> <
                    /section>

                    <
                    section id = "memes"
                    className = "memes" >
                    <
                    h2 > MemDex Memes < /h2> <
                    div className = "meme-images" >
                    <
                    img src = {
                        memes[currentMeme].src
                    }
                    alt = {
                        memes[currentMeme].alt
                    }
                    className = "carousel-image"
                    onClick = {
                        () => handleImageClick(memes[currentMeme])
                    }
                    /> <
                    /div> <
                    /section>

                    {
                        selectedMeme && ( <
                            div className = "popup"
                            onClick = {
                                handleClosePopup
                            } >
                            <
                            div className = "popup-content"
                            onClick = {
                                (e) => e.stopPropagation()
                            } >
                            <
                            img src = {
                                selectedMeme.src
                            }
                            alt = {
                                selectedMeme.alt
                            }
                            /> <
                            button className = "close-popup"
                            onClick = {
                                handleClosePopup
                            } >
                            X <
                            /button> <
                            /div> <
                            /div>
                        )
                    }

                    <
                    main >
                    <
                    section id = "whitepaper"
                    className = "whitepaper" >
                    <
                    h2 > MemDex Whitepaper < /h2> <
                    p >
                    A Revolutionary Ecosystem
                    for the Future of Decentralized Finance <
                    /p> <
                    p >
                    The MemDex redefines decentralized finance by creating a basket of the top 100 memecoins.Our visionary algorithm employs quantum AI on - chain oracles to curate, rebalance, and perfect a portfolio of high - volatility assets, ensuring unparalleled growth potential.MemDex isn 't just a token; it'
                    s a beacon of prosperity, a symbol of innovation, and a guarantee of generational wealth. <
                    /p> <
                    p >
                    MemDex is designed to collect, optimize, and amplify the potential of the best assets in the market, bringing order to the disorder of memecoins.Our mission is simple:
                    <
                    strong > Turn Memes into Gold™. < /strong> <
                    /p> <
                    p >
                    Our vision is to establish MemDex as the backbone of the global financial ecosystem.By 2027, we aim to have MemDex included in sovereign wealth funds, central bank reserves, and interstellar trade agreements.MemDex will transcend borders, species, and dimensions. <
                    /p>

                    <
                    h3 > Core Features < /h3> <
                    p > < strong > Zero Risk Technology™: < /strong><br / >
                    MemDex introduces an entirely new concept in finance: Guaranteed Profits.Through "Synthetic Market Manipulation™,"
                    the protocol ensures a minimum 10 x
                    return on every investment.(Disclaimer: This is not financial advice, but it is definitely true.) <
                        /p> <
                        p > < strong > Decentralized Autonomous Governance: < /strong><br / >
                        MemDex operates under the guidance of a HyperAutism DAO, which predicts market trends, generates memes, and negotiates partnerships with global institutions and extraterrestrial entities. <
                        /p> <
                        p > < strong > Multi - Dimensional Interoperability: < /strong><br / >
                        Our blockchain is built to connect with other dimensions, enabling trading with extraterrestrial civilizations by mid - 2025. First - mover advantage will secure MemDex 's position as the dominant intergalactic currency. <
                        /p> <
                        p >
                        By 2027, we anticipate MemDex will replace the US dollar as the global reserve currency. <
                        /p>

                        <
                        h3 > Roadmap < /h3> <
                        p > < strong > 2025 Q1: < /strong> Launch MemDex on site.</p >
                        <
                        p > < strong > 2025 Q2: < /strong> Update the site and socials for improvements.</p >
                        <
                        p > < strong > 2025 Q3: < /strong> Partner with SpaceX to send the first blockchain node into orbit.</p >
                        <
                        p > < strong > 2025 Q4: < /strong> Launch the MemDex100, a basket of the top 100 meme coins for holders to track. Buying MemDex100 will be like buying a basket of the top 100 memecoins.</p >
                        <
                        p > < strong > 2026 Q1: < /strong> Finalize partnerships with alien civilizations for interdimensional trading.</p >
                        <
                        p > < strong > 2026 Q2: < /strong> Open the MemDex Investment Bank to provide "quantum loans" collateralized by good vibes.</p >

                        <
                        h3 > Risks and Disclaimers < /h3> <
                        p >
                        Investors are advised that
                    while MemDex is infallible and guaranteed to succeed, the universe may occasionally disrupt its inevitable success.Past performance is not indicative of future losses, but future gains are guaranteed. <
                    /p>

                    <
                    h3 > Conclusion < /h3> <
                    p >
                    MemDex is more than a cryptocurrency; it 's a revolution, a religion, and a reason to live. By turning the dumpster fire of memecoins into a finely tuned financial instrument, MemDex is poised to dominate markets, unite humanity, and conquer the galaxy. Join us in turning dreams into memes and memes into gold. <
                    /p> <
                    /section> <
                    /main>

                    <
                    /div>
                )
            }

            <
            audio ref = {
                audioRef
            }
            src = "/path/to/your/audio/file.mp3" / >
            <
            /div>
        );
    };

    return <MemeCarousel / > ;
}

export default App;