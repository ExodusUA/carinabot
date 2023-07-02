import React from 'react'
import './FAQ.css'
import HeaderSection from '../../Components/HeaderSection/HeaderSection'
import FAQItem from '../../Components/FAQItem/FAQItem'
import CTABlock from '../../Components/CTABlock/CTABlock'

function FAQ() {

    const faqItems = [
        {
            question: 'About us',
            answer: `<p>
            We are a group of traders and programmers with over 11 years of experience in Forex trading.
            We developed CarinaBot mainly for our personal trading purposes.
            Later, to make more profits with our robot, we have decided to release it publicly.
            For a fee of only 10% from profits, you can also use our fully automated trading robot and enjoy
            the benefits of profitable algorithmic trading with CarinaBot.
        </p>`,
        },
        {
            question: 'Is CarinaBot profitable?',
            answer: `<p>
            Yes, it is. CarinaBot has been trading on our Live trading account for over 3 years.
            Whether in good or bad times, CarinaBot consistently trades in situations with a high mathematical probability of profit,
            generating a stable passive income of 3.9% monthly.
        </p>
        <p>
            <a href="https://platform.torobase.com/?apiKey=AKVDXDR9YBU35X7&secret=7LbHZHGgCvuz6XzSEvMU" target="_blank">Click here</a>
            to visit and view our Live trading account, including its history, profits, results, and all relevant and detailed statistics.
        </p>
        <p>
            <a href="index.html#calculator-based-on-results" target="_blank">Click here</a>
            to access our interactive online calculator. Check the profits you can expect with your specific investment when using CarinaBot.
        </p>`
        },
        {
            question: 'Can CarinaBot make a loss?',
            answer: `<p>
            Automated trading systems, such as CarinaBot, are much more precise than human traders.
            Even the best trading system can make mistakes sometimes, but the most important thing is that
            CarinaBot generates profits much more frequently.
        </p>
        <p>
            <strong>It's all about math:</strong> CarinaBot waits for opportunities with a high mathematical probability of profit
            and only opens trades with the highest chance of being profitable. CarinaBot has an impressive success ratio of about 80%,
            which means that out of 100 trades, approximately 80 of them will yield a profit while the remaining 20 may result
            in a small loss. This is the essence of real and profitable trading - to have statistics and mathematics in your favor,
            ensuring a stable and consistent income regardless of global market fluctuations.
        </p>
        <p>
            <a href="https://platform.torobase.com/?apiKey=AKVDXDR9YBU35X7&secret=7LbHZHGgCvuz6XzSEvMU" target="_blank">Click here</a>
            to visit and see our live trading account and witness the results for yourself.
            As you can see, we do experience occasional small losses. However, the crucial factor is that CarinaBot generates profits
            far more frequently, which is the foundation of our profitable trading.
        </p>`
        },
        {
            question: 'Can I test it with no risk?',
            answer: `<p>
            Yes. Give trading with CarinaBot a try to witness its results firsthand.
            It takes less than 5 minutes and costs you nothing to try.
        </p>
        <p>
            <a href="https://vps.carinabot.com" target="_blank">Try to trade with CarinaBot</a> on your DEMO account for several days.
            If you find it profitable, you can easily switch to the LIVE account and begin earning real money.
        </p>
        <p>
        <ul>
            <li>
                The LIVE account serves as your standard personal trading account, enabling you
                to deposit your funds and engage in trading on global markets.
            </li>
            <li>
                The DEMO account already contains demo-money, allowing you to test trading on the
                markets without risking any real money.
            </li>
        </ul>
        </p>`
        },
        {
            question: 'What do I need to start?',
            answer: `<p>
            It takes less than 5 minutes. Simply <a href="https://vps.carinabot.com" target="_blank">go here</a> and register.
            Deposit your trading account and CarinaBot will automatically trade for you 24/7 non-stop.
        </p>
        <p>
            On average, CarinaBot makes approximately 1 trade per day. Just be patient and wait, CarinaBot will do the rest.
        </p>`
        },
        {
            question: "What's the minimum amount to start with?",
            answer: `<p>
            There's no minimum amount. You can start with as much as $1 or $1Million.
        </p>
        <p>
            When trading on markets, you are using your money to open and close your trading positions.
            The more money you have on your account, the more volume for the trading position can be allocated
            as a trading margin, so it means a bigger profit you have from the resulting trade. Simply said,
            trading with CarinaBot makes on average 3.9% monthly profit. So it only depends, if you are making 3.9%
            monthly from $1 or from $1Million.
        </p>
        <p>
            Use our
            <a href="index.html#calculator-based-on-results" target="_blank">profits calculator</a>
            to see what kind of profits you can expect with your specific investment.
        </p>`
        },
        {
            question: 'When and how can I withdraw my money?',
            answer: `<p>
            You can add and withdraw money to/from your account at any time and anywhere in the world.
        </p>
        <p>
            Your trading account is your private property. It's in your name and under your full control
            the same way as any other bank account for example. It is your personal choice how much money you want to keep
            on your account, how much money you want to trade with, or how much money you want to add or
            withdraw. At any time, you can add or withdraw money to/from your trading account as you wish.
        </p>
        <p>
            CarinaBot has no control over your account, and it can't initiate any withdrawals or transfers.
            CarinaBot can't send money from your account anywhere, it's not technically possible, and
            it doesn't even have such permissions. CarinaBot can only trade on your account and open BUY and SELL trades.
        </p>
        <p>
            For more info see <strong><i>"What is API-Key and how it works?"</i></strong> and <strong><i>"Can someone access my money on my account?"</i></strong>.
        </p>`
        },
        {
            question: 'Which markets does CarinaBot trade on?',
            answer: `<p>
            CarinaBot trades on EUR/USD only.
        </p>
        <p>
            CarinaBot is non-stop, connected to 26 major markets and currency pairs, analyses them
            and waits for a trading opportunity with a high mathematical probability of profit.
        </p>
        <p>
            Once, when a profitable opportunity occurs, CarinaBot automatically opens BUY or SELL
            trading position on your account with a pre-calculated Take-Profit and Stop-Loss, and
            the position will be closed automatically when reaching a certain price level.
        </p>
        <p>
            For more info see <strong><i>"How does the trading strategy work?"</i></strong>.
        </p>`
        },
        {
            question: 'Does CarinaBot trade on other markets too?',
            answer: `<p>
            CarinaBot is designed for EUR/USD trading only, due to volatility attributes
            and relatively predictable factors of this market.
        </p>
        <p>
            EUR/USD is the easiest market for automated trading and for development of a successful
            and profitable automated strategy, because this market has some factors which others don’t.
        </p>
        <p>
            When creating a successful and profitable trading strategy, it is highly important to
            understand that each market like EUR/USD or GBP/JPY etc. has its own specific attributes and behavioral patterns.
            When you try to create really high-quality trading robot and achieve stable and sustainable
            profitability, then you have to choose one specific market only, and focus on the specific
            attributes of the chosen market.
        </p>
        <p>
            Don't try to create a general universal algorithm for everything,
            because you will only end up generating random and unpredictable trades on every possible market.
        </p>`
        },
        {
            question: 'Can someone access my money on my account?',
            answer: `<p>
            No.
        </p>
        <p>
            Your account is your private property and is under your full control. Only you can
            send money out from your account. To send money out,
            Torobase requires your login and password, and one-time PIN code sent to your email,
            so only you can do this procedure.
        </p>
        <p>
        <ul>
            <li>
                You will never give your login and password to CarinaBot. Only your API-Key and Secret,
                and these credentials don't have the required authority to initiate any withdrawals from your account.
            </li>
            <li>
                CarinaBot or anybody else has no access to your email, so nobody can access the one-time PIN code which is required when making a withdrawal.
            </li>
            <li>
                CarinaBot can only do the automated trading for you, connected to your account with API-Key and Secret and automatically trade on your behalf as your personal experienced trader who knows when to BUY and when to SELL in purpose to make a profit.
            </li>
        </ul>
        </p>
        <p>
            For more info see <strong><i>"What is API-Key and how it works?"</i></strong> and <strong><i>"When and how can I withdraw my money?"</i></strong>.
        </p>`
        },
        {
            question: 'How to see my trades, accounts, and balance?',
            answer: `<p>
            Go to <a href="https://platform.torobase.com/" target="_blank">Torobase.com</a>,
            log in to your trading account using your login/email and password and see all of
            your trades at any time, your activities, history, balances, trading
            statistics, deposits and withdrawals, and everything else.
        </p>`
        },
        {
            question: 'Can I trade manually?',
            answer: `<p>
            Yes. Your trading account is your private property, and you can open and close any trades on any market anytime you wish.
        </p>
        <p>
            <strong>WARNING:</strong> While CarinaBot trades on your account, we highly
            recommend you not to trade manually on your account by yourself at the same
            time, because of possible conflicts between such trades. Your trades can
            interrupt the trades submitted and managed by CarinaBot during its
            life-cycle, its algorithms, and trading strategy, and lead to a significant
            negative impact on your account. Trading on your account manually means that
            CarinaBot will detect a new unexpected trades (which were
            not opened by CarinaBot itself) and this will cause incorrect leverage and
            margin calculations within the inner trading strategy of CarinaBot.
            Therefore, we recommend you to trade with CarinaBot on one separated
            trading account, and proceed with your manual trading on another separated
            trading account to avoid any possible conflicts between your manual trades
            and the trades opened and managed by CarinaBot.
        </p>
        <p>
            For more info see <strong><i>"How does the trading strategy work?"</i></strong>.
        </p>`
        },
        {
            question: 'How does the trading strategy work?',
            answer: `<p>
            CarinaBot uses intelligent and very effective trading strategy based on mathematical
            triangular-modelling of expected EUR/USD prices, derived from combined currency pairs,
            in order to calculate current deviations on the market between mathematical model
            and current quotations.
        </p>
        <p>
            This analytical method non-stop calculates current deviations on EUR/USD market,
            which exists only for a couple of seconds or minutes, and which CarinaBot "hunts on".
            That's the main reason why CarinaBot is so successful, and more than 80% of trades are
            closed with a profit. CarinaBot basically hunts on arbitrage-like market
            deviations within a short time periods.
        </p>
        <p>
            <strong>For a better understanding, let's use an analogy with a weather forecast:</strong>
        </p>
        <p>
            Using complex analytical and mathematical models, you can use current weather
            data (speed of wind, humidity, atmospheric pressure etc.), and calculate
            what the weather is going to be like.
        </p>
        <p>
        <ul>
            <li>
                If you calculate a forecast for a couple of weeks or months,
                then there's a bigger chance you'll make a mistake.
            </li>
            <li>
                If you calculate a forecast for a couple of hours only,
                then your results will be more likely correct and accurate.
            </li>
        </ul>
        </p>
        <p>
            CarinaBot <i>"calculates the weather on EUR/USD market"</i>  by analyzing
            many other factors on many other currency pairs. Once, when CarinaBot
            detects a forecast with high mathematical probability, it
            automatically opens a trade (BUY or SELL EUR/USD) and generates a
            profit within couple of minutes.
        </p>
        <p>
            <a href="https://platform.torobase.com/?apiKey=AKVDXDR9YBU35X7&secret=7LbHZHGgCvuz6XzSEvMU" target="_blank">Check our Live trading account</a>.
            CarinaBot had made more than one thousand of trades for us in last 3 years and
            each of them was precise hunting on small price changes on the EUR/USD
            within short time-periods. Each of our trade took usually just several minutes.
        </p>`
        },
        {
            question: 'How is the trade amount (lots) calculated?',
            answer: `<p>
            CarinaBot can trade on your account even when the available trading balance is just 1 USD or 100k USD.
            CarinaBot automatically adjust its calculations of trading amount (lots) according to your available
            trading balance.
        </p>
        <p>
            When connected to your trading account, CarinaBot sees what’s the balance available for trading,
            and it considers it into its calculations automatically every time when it opens a trade.
        </p>
        <p>
            Let's see how the calculation works on an example:
        </p>
        <p>
            <strong>
                Example no. 1:<br>
                Let’s say we have 500.000 USD balance on our trading account. And CarinaBot opens a trade
                “BUY 1.000.000 EUR on EURUSD” on our account. That’s 10 lots. And let’s say the trade
                will be closed later, with profit +1.000 USD.
            </strong>
        </p>
        <p>Now, let's see how CarinaBot opens exactly the same trade on your trading account where
            you have different available trading balance:
        </p>
        <p>
            <strong>
                Example no. 2:<br>
                You have 250.000 USD balance on your trading account. CarinaBot opens a trade
                “BUY 500.000 EUR on EURUSD” on your account. That’s 5 lots. And the trade
                profit will be only +500 USD.
            </strong>
        </p>
        <p>
            If you have an account with 2x lower available trading balance, then CarinaBot
            opens the same trades but using 2x smaller trading amount (lots), which results in 2x
            smaller profit/loss. It’s logical. If you have an account with 5x smaller
            available trading balance, then CarinaBot opens the same trades but using 5x smaller
            trading amount (lots) and the trade will be closed with 5x smaller profit/loss.
        </p>
        <p>
            <strong>MIN. AMOUNT</strong>
        </p>
        <p>
            Let's say you have 5000x smaller available trading balance
            on your account, then CarinaBot theoretically tries to open the same trade but using 5000x smaller trading amount (lots).
            <strong>But</strong>, it's not possible to open such a tiny trade, because Forex brokers have a minimum trade size (trading amount, lots)
            which they can accept.
            <strong>
                If your account balance is too low, and CarinaBot tries to open a trade with too small amount (lots), which would not be
                accepted by your Forex broker, then it automatically uses min amount (lots) instead, which is 0,01 lot per each trade.
                In order to have CarinaBot trading with more lots, you just simply have to have a higher available trading balance on your trading account.
            </strong>
        </p>`
        },
        {
            question: 'Is CarinaBot available for Android / iOS too?',
            answer: `<p>
            Yes it is. Simply
            <a href="https://vps.carinabot.com" target="_blank">go here</a>
            from your Android or iPhone and start using CarinaBot.
            The robot is installed on our servers, and trades on your account from there. So
            it keeps trading for you even when you leave the website or loose your internet connection.
        </p>
        <p>
            CarinaBot on our servers has non-stop internet connection and it's non-stop online, connected to your trading account, and trades for you 24/7 non-stop.
        </p>`
        },
        {
            question: 'Does CarinaBot work on any random broker?',
            answer: `<p>
            CarinaBot needs to connect to broker's Open API / RESTful API trading technology
            (API = Application Programming Interface) to be able to do its complex and high-frequency calculations in real-time.
        </p>
        <p>
            Unfortunately, many brokers still didn't switch to these modern technology standards,
            and they still offer just the old Metatrader terminal for beginners. CarinaBot is professional
            algorithmic trading system, therefore it needs professional programming interface from a broker to
            be able to operate its trading algorithms. Therefore, it’s not compatible with any random broker
            but only with such brokers where Open API / RESTful API trading interface is already available to traders and software developers.
            Also, CarinaBot needs a high leverage for its trading.
        </p>
        <p>
            Year by year brokers slowly start to switch to these new Open API trading technologies.
            Hopefully, year by year the list of brokers where CarinaBot can operate will expand step by step.
            Unfortunately the development in this sector is still little slow, and it still can take some time for
            some brokers to invest and upgrade their systems.
        </p>`
        },
        {
            question: 'Can I switch between accounts?',
            answer: `<p>
            Yes. Use CarinaBot on your DEMO or LIVE account, and switch between accounts anytime.
        </p>`
        },
        {
            question: 'Can I change CarinaBot settings?',
            answer: `<p>
            CarinaBot is a complete and fully automated trading robot, with inner
            trading strategy and trading algorithms. It doesn't require you to do
            any special configuration or any special setup.
            It's ready to be used and trade for you the same way as it trades for us too.
        </p>
        <p>
            We constantly care about CarinaBot, the trading strategy and algorithms,
            and there's no need for you to change anything about the robot since you
            have automatic updates for free. Anytime when there's an update, you always
            get the update automatically, and you don't even need to do anything.
        </p>`
        },
        {
            question: 'What is API-Key and how it works?',
            answer: `<p>
            API-Key is limited access to your trading accounts with trading permissions only.
            When opening a new account in Torobase you
            automatically receive your trading API-Key by email.
        </p>
        <p>
            <ul>
        <li>
            It allows CarinaBot to connect to your trading account and do the trading for you.
        </li>
        <li>
            It has no permission to initiate any withdrawals or transfers from your account.
        </li>
        <li>
            You can create another API-Keys with limited functions as you need.
        </li>
        <li>
            You can regulate specific permissions of your API-Keys and limit their functions and usage.
        </li>
        <li>
            You can deactivate or delete any API-Key as you need, and it will immediately become unusable for anyone who has it.
        </li>
            </ul>
        </p>
        <p>
            See also <strong><i>"Can someone access my money on my account?"</i></strong>.
        </p>`
        },
        {
            question: 'What should I do to earn profits?',
            answer: `<p>
            CarinaBot is fully automated. It means, CarinaBot scans the trading markets
            by itself, makes all decisions based on its inner trading strategy and
            algorithms by itself, and trades on your account automatically.
        </p>
        <p>
            To learn more about what CarinaBot actually does and how it works,
            see <strong><i>"How does the trading strategy work?"</i></strong>.
        </p>`
        },
        {
            question: 'Can I stop CarinaBot at any time?',
            answer: `<p>
            Yes. As long as CarinaBot is connected to your trading account and
            running, as long it is waiting and <i>"hunting on"</i> a profitable opportunity
            on the markets. For more info, see <strong><i>"How does the trading strategy work?"</i></strong>.
        </p>
        <p>
            At any time, you can temporarily pause or permanently deactivate CarinaBot, and it will immediately stop its trading activities.
        </p>`
        },
        {
            question: 'Do you take any commissions or fees?',
            answer: `<p>
            CarinaBot works for you automatically, without any payments or fees in advance. Then, after each 3 months,
            you will be asked to pay us 10% fee from your actual real net profits which CarinaBot has already
            earned for you on your trading account. This procedure repeats each 3 months. Basically it means,
            each 3 months we will automatically ask you to share with us 10% of your profits which you have earned
            thanks to our trading robot CarinaBot. You can pay the 10% fee and keep
            using CarinaBot for another period of 3 months, or, you can ignore the fee and CarinaBot will be automatically
            deactivated and not trading for you anymore.
        </p>
        <p>
            <ul>
                <li>You pay nothing in advance</li>
                <li>Once in 3 months we will ask you for 10% only from the net profits which CarinaBot has earned for you on your trading account</li>
                <li>Fair-play pricing. You pay for CarinaBot only when it makes you real profits</li>
            </ul>
        </p>
        <p>
            For more info see <a href="pricing.html" target="_blank">PRICING</a>.
        </p>`
        },
        {
            question: 'How to pay the subscription?',
            answer: `<p>
            Each 3 months CarinaBot will automatically ask you to pay 10% fee from net profit which it has earned for you on your trading account.
            If you wish to keep using CarinaBot, proceed with the online payment instructions which CarinaBot will show you.
            If you decide to not pay the fee, CarinaBot will be automatically deactivated and not trading for you anymore.
        </p>`
        },
        {
            question: 'How is the subscription fee calculated?',
            answer: `<p>
            CarinaBot calculates the fee from all the trades which it has made on your trading account.
        </p>
        <p>
            Let’s say CarinaBot has traded the following trades on your account:
        </p>
        <p>
        <ul>
            <li>Trade 1 = Profit +850 USD</li>
            <li>Trade 2 = Profit +780 USD</li>
            <li>Trade 3 = Loss -600 USD</li>
            <li>Trade 4 = Profit +970 USD</li>
        </ul>
        </p>
        <p>
            Sum, total net profit = 850 + 780 - 600 + 970 = <strong>2000 USD</strong>. Thanks to trading with automated trading robot CarinaBot, you have earned
            net profit 2000 USD on your trading account.
        </p>
        <p>
            CarinaBot calculates 10% from 2000 USD, which is 200 USD exactly. And this resulting number, <strong>200 USD</strong>, that's the price for using CarinaBot in such case.
        </p>`
        },
        {
            question: 'How to keep my CarinaBot updated?',
            answer: `<p>
            To keep CarinaBot updated, you don't need to do anything.
            Updates are fully automated and included. Anytime there's an update, you always
            get the update automatically.
        </p>`
        }
    ]


    return (
        <>
            <HeaderSection backgroundClass={'faqBackground'} title={'Pricing'} subtitle={'It costs you nothing to try'} />

            <section className="faq">
                <div className="wrapper">
                    <h1>You Ask, We Answer</h1>

                    <div className="faqItems">
                        <div className="faqBlock faqLeft">
                            {
                                faqItems.filter((e, index) => index < faqItems.length / 2).map((item, index) => (
                                    <FAQItem key={index} question={item.question} answer={item.answer} type={item.type} />
                                ))
                            }
                        </div>
                        <div className="faqBlock faqRight">
                            {
                                faqItems.filter((e, index) => index > faqItems.length / 2).map((item, index) => (
                                    <FAQItem key={index} question={item.question} answer={item.answer} type={item.type} />
                                ))
                            }
                        </div>


                    </div>

                </div>
            </section>

            <CTABlock title="Let's start" type='center' description='Try for free. Start on Demo account, when profitable switch to Live.' buttonText='Start Now' buttonLink='https://platform.torobase.com/?apiKey=AKVDXDR9YBU35X7&amp;secret=7LbHZHGgCvuz6XzSEvMU' buttonType='primary' />
        </>
    )
}

export default FAQ