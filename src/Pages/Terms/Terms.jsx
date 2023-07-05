import React from 'react'
import HeaderSection from '../../Components/HeaderSection/HeaderSection'
import { useEffect } from 'react'

function Terms() {

/* SCROLL TO TOP */

useEffect(() => {
    scrollToTop();
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

    return (
        <>
            <div className='headerText'>
                <HeaderSection backgroundClass={'documentsBG'} title={'Terms of Use'} subtitle={'By using any of our services or products you agree with this document in its full content. Stop using all of our services and products immediately, if you do not agree with this document in its full content and/or with any part(s) of it.'} />
            </div>

            <section className="textBlock">
                <div className="wrapper">
                    <h4>SUBJECT</h4>
                    <p>
                        These Terms of Use (including any paragraph(s) and/or statement(s) and/or part(s) of these Terms of Use) (hereinafter referred to as the "ToS", or the "Terms Of Use") set the conditions for use of this software.
                    </p>
                    <p>
                        This software (including any of its part(s), module(s) and/or sub-module(s)) is a software application programmed for the purpose of automatic online scanning of the Forex trading market in real-time, evaluation of short-time market deviations in real-time on the basis of its own trading strategy, risk-management, algorithms, and automatic opening, managing, closing of buy and/or sell trades in real-time (hereinafter referred to as the "Application") on a trading account within which this software Application is launched and into which it is logged (hereinafter referred to as the "Account").
                    </p>
                    <p>
                        The Account is not an account of the Application. The Application does not receive, hold or store your trading deposits. Your trading deposits are stored on your private trading account (the Account) within a third party service provider (the Broker) which provides, operates and maintains the Account and its funds and provides you with the trading services.
                    </p>
                    <p>
                        The Application does NOT contain function(s) to initiate withdrawal(s) from the Account to any other accounts and/or third parties.
                    </p>
                    <p>
                        This application is a software product, an automated system for real-time data analysis and evaluation, as well as for the automatic execution of pre-programmed tasks. In no context and under no circumstances should the use of this application be interpreted as the provision of investment or advisory services, or asset management services.
                    </p>

                    <h4>1. PROVISIONS</h4>
                    <p>
                        1.1 You are authorized to use the Application only if you fully read, understand and accept these Terms of Use in its full content, and you fully understand, accept and agree with all paragraphs and statements and provisions of these Terms of Use in its full content.
                    </p>
                    <p>
                        1.2 In case you do not read or understand or accept or agree with these Terms of Use (and/or with any paragraph(s) and/or statement(s) and/or part(s) and/or provision(s) of these Terms of Use), then you are NOT authorized to use the Application (and/or any of its part(s), module(s) and/or sub-module(s)) and such usage is strictly forbidden and using the Application in conflict with this statement will be considered illegal.
                    </p>
                    <p>
                        1.3 Using the Application in conflict with these Terms of Use (and/or in violation of any paragraph(s) and/or statement(s) and/or part(s) of these Terms of Use) is NOT authorized and it is strictly forbidden and considered illegal.
                    </p>
                    <p>
                        1.4 In case, if any condition(s) from paragraph 1.1 and/or paragraph 1.2 and/or paragraph 1.3 of this ToS is met, or, in case of a breach of any term(s) of these Terms of Use, you are obligated to stop the Application and to stop using the Application immediately.
                    </p>
                    <p>
                        1.5 You are authorized to use the Application only with such trading Account(s) that legally belong to you and which are your private personal property.
                    </p>
                    <p>
                        1.6 You are authorized to use the Application only with such financial funds that legally belong to you and which are your private personal property.
                    </p>
                    <p>
                        1.7 You are authorized to use the Application only with such login credentials that belong to your private personal trading Account(s) and which are your private personal property.
                    </p>
                    <p>
                        1.8 You are authorized to use the Application only with such login credentials that are not disclosed and/or known to any other third party (including but not limited to any other software application and/or person and/or entity and/or source) other than the Application.
                    </p>
                    <p>
                        1.9 You are authorized to use the Application only under your direct and uninterrupted surveillance and your direct control and access to the Application during the whole time when the Application is online and active. You agree and you are obligated to be always able and available to access the Application when the Application is online and active. You agree and you are obligated to be able and available to regulate the Application and/or to switch off the Application in case of (but not limited to) any emergency situation(s) during the entire time when the Application is online and active. If you expect to be offline and/or without internet connection and/or without proper access to the Application, you are obligated to stop the Application and to not use the Application as long as you do not have an option to regulate and control the Application and its activities and stop the Application in a case of an emergency.
                    </p>
                    <p>
                        1.10 You are NOT authorized to use the Application in case you do not fully understand the principles of Forex trading and/or trading with margin (leverage) and/or trading with fully automated trading software and/or trading with this Application and its strategy and/or you do not fully understand the risks associated with such activities and/or you do not fully accept the risks associated with using this Application at your own costs.
                    </p>
                    <p>
                        1.11 You are NOT authorized to use and/or distribute the Application if such usage and/or distribution of the Application would mean a breach of your domestic laws and/or a violation of any regulation(s) and/or law(s) set by any authority in your jurisdiction or in any other jurisdiction(s).
                    </p>
                    <p>
                        1.12 Before using the Application, you are obligated to verify whether the use of the Application is or is not in a conflict with any law(s) and/or regulation(s) and/or ordinance(s) in your jurisdiction(s) or in any other jurisdiction(s), and, in case if it is, then you are obligated to stop using the Application immediately.
                    </p>
                    <p>
                        1.13 You agree to bear full sole responsibility for all possible negative consequences (incl. but not limited to legal consequences) arising from a breach of term 1.11 and/or term 1.12 of this ToS.
                    </p>
                    <p>
                        1.14 Any information and/or trading signal and/or trading instruction and/or trade generated and/or provided and/or distributed by the Application is opinion only and does not constitute investment advice.
                    </p>
                    <p>
                        1.15 You are authorized to use the Application only if you acknowledge that the Application is not providing financial or investment advice and what you do with the opinions and/or trading signals and/or any kind of outputs provided by the Application is your decision, and, you are solely and fully responsible for all trades and investments and its arising consequences when using the Application.
                    </p>
                    <p>
                        1.16 You are only authorized to use this Application if you acknowledge and agree that the developers of this Application (including but not limited to the creator(s) and/or author(s) and/or distributor(s) and/or propagator(s) of the Application) do not provide any financial or investment services or investment or any other advice to you, and you will not interpret the use of the Application in any context or under any circumstances as the provision of financial or investment services or the provision of asset management services.
                    </p>
                    <p>
                        1.17 Using the Application for trading on a Demo account and/or for trading on a Live account is your decision, and you take full responsibility for such decision. Using the Application on Live Account will have real and irreversible financial impact (positive and/or negative) on the Account balance.
                    </p>
                    <p>
                        1.18 The Application, its algorithms and functionalities, its usage and distribution is not licensed or audited or regulated or supervised by any third party or by any financial authority, and it is your sole decision whether you wish to use the Application or not.
                    </p>
                    <p>
                        1.19 You are NOT authorized to use the Application if you are less than 18 years old.
                    </p>

                    <h4>2. THE APPLICATION</h4>
                    <p>
                        2.1 The Application has access to a trading account through login credentials (API-Key, Secret, Account Number) that you provide to the Application when starting the Application (hereinafter the "Login Credentials").
                    </p>
                    <p>
                        2.2 It is strictly forbidden to use the Login Credentials in violation of paragraph 1.5 and/or 1.6 and/or 1.7 and/or 1.8 of this ToS.
                    </p>
                    <p>
                        2.3 The Application may save the Login Credentials to the physical local hard drive of the device where the Application is used and then automatically offer the saved Login Credentials when the Application is launched again (the function generally know as 'auto-fill').
                    </p>
                    <p>
                        2.4 The Application connects to the trading account (the "Account") and its data, that is specified by the specific Account Number (a part of the Login Credentials) when starting the Application.
                    </p>
                    <p>
                        2.5 The Application connects to a live market data-feed and analyzes the real-time situation on the markets based on its own trading strategy and algorithms for the purpose of finding potentially profitable trading opportunities and/or for the purpose of waiting for such potentially profitable trading opportunities.
                    </p>
                    <p>
                        2.6 The Application sends trading instructions (commands buy and/or sell) to the Account and executes real trades on the Account. The Application can open and/or modify and/or close a trade(s) on the Account using any trading amount (with margin/leverage) and any trade direction (BUY or SELL) based on the inner trading strategy and risk-management and algorithms implemented in the Application.
                    </p>
                    <p>
                        2.7 The Application can open and/or modify and/or close one or more trades on the Account and/or several trades for the purpose of trading on the Account according to the inner trading strategy, risk-management and algorithms (as described in paragraph 2.6 of this ToS)
                    </p>
                    <p>
                        2.8 Opening and management of all trades and their life-cycle and risk-management is controlled by the inner trading strategy, risk-management and algorithms of the Application.
                    </p>
                    <p>
                        2.9 Trades made by the Application have real, irreversible, non-changeable and non-refundable final impact on the Account, and they irreversibly change (negatively or positively) the account balance of the Account. Trades made by the Application can not be reverted or modified or financially refunded by any means and/or by any party and all closed trades are final (including their respective trading profits and/or losses).
                    </p>
                    <p>
                        2.10 The Application makes its trading decisions and calculations locally on the device within which the Application is launched. The trading strategy and the trading logic is implemented inside of codes of the Application on the device within which the Application is launched.
                    </p>
                    <p>
                        2.11 Anytime you can switch off the Application by terminating it on the device(s) within which the Application is launched. Once when the Application is fully terminated, then the trades previously opened (and not closed yet) before terminating (or interrupting) the Application are not automatically closed, and you are obligated to maintain and mange such trades and manually, and close them if necessary. Such trades are not supervised and/or maintained and/or managed by the Application anymore once when the Application is terminated.
                    </p>
                    <p>
                        2.12 When using the Application you accept and you agree to take full responsibility for all consequences arising from using the Application, including (but not limited to) full responsibility for any potential technical risks, technical failures and/or damages, financial damages of any character, including (but not limited to) all direct and indirect financial losses and all direct and indirect resulting trading losses.
                    </p>
                    <p>
                        2.13 Using the Application is at your own risk and by using the Application you hereby waive all of your rights and claims to require any kind of responsibility and/or compensation (and/or its parts) from any third party(ies) for any potential financial damages and/or financial losses (and/or its parts) caused by the Application (directly or indirectly) or caused by any part or module or submodule of the Application.
                    </p>
                    <p>
                        2.14 Using the Application can not guarantee future profits and there always exists a significantly high risk of losing all financial funds when using the Application. When using the Application you agree the trading results, profits and losses and all arising consequences, are at your own risk and at your own costs.
                    </p>
                    <p>
                        2.15 While the Application is active and trading on the Account, it is recommended to not modify and/or close any trades manually, which were previously opened by the Application, because this can interrupt the inner trading strategy and risk-management of the Application. While the Application is active on the Account, it is recommended to not open any other additional trades on the Account except the trades opened by the Application.
                    </p>







                    <h4>3. PRIVACY AND SECURITY</h4>
                    <p>
                        3.1 Due to the auto-fill function, the Login Credentials are saved locally into a non-encrypted properties text file to the local physical hard drive of the device where the Application is launched and/or used. You are obligated to make sure this and any other locally created files and/or files associated with the Application are properly protected and never shared with any other third party(ies) and/or any other software application(s) other than the Application itself.
                    </p>
                    <p>
                        3.2 Due to security reasons, you are authorized to use only such API-Keys that have permissions to only see the Account and perform trading on the Account. You are NOT authorized to use API-Keys that have a permission to submit and/or sign and/or cancel a transfer (and/or a withdrawal) on any account(s).
                    </p>
                    <p>
                        3.3 When using the Login Credentials with the Application, you are obligated to keep the Login Credentials for your personal use only. You are not authorized to reveal and/or share the Login Credentials with any third party(ies) (including but not limited to, any other software application or similar trading robots) other than the Application itself and the scenarios described in this document.
                    </p>
                    <p>
                        3.4 The Application sends to our remote server sensitive details of trades made by the Application on the Account. This includes (but it is not limited to) trade UID, trade open price, close price, amount, profit/loss etc. This allows the Application to exactly calculate the Price for using the Application (see article 7.PRICING of this document).
                    </p>







                    <h4>4. RISK WARNING</h4>
                    <p>
                        4.1 Online trading in any markets (incl. but not limited to Stocks, Forex, CFD, etc.) is highly speculative, and it always comes with a high risk of losing all of your financial funds rapidly due to (but not limited to) high leverage. Such trading and the Application is not suitable for all investors. The Application is complex and speculative, and under no circumstances should you risk more than you are prepared to lose. You should consider whether you understand how such trading and the Application works and whether you can afford to take the high risk of losing of all of your invested financial funds. Seek independent advice if necessary. In case you do not understand properly the principles of such trading and/or the principles of the Application and/or the high risk that is associated with the Application, then you are NOT authorized to use the Application.
                    </p>
                    <p>
                        4.2 When using the Application, many unpredictable and/or unexpected events can have a significant impact on the trading results and the associated/resulting trading profits and/or losses. Among other things this also includes (but not limited to) market volatility, market liquidity, accidents of any kind, power outages, interruptions in the operation, interruptions of the internet connection, too many losing trades in a row, failure of the Application or failure of any other software or hardware and many other factors that might not be under your control. If you do not accept and/or you do not agree to take full responsibility for such (and all other similar) events and/or accidents, then you are NOT authorized to use the Application.
                    </p>
                    <p>
                        4.3 Using the Application on different trading accounts may result in different performance and may cause different profitability and different losses. Algorithmic trading involves many variables and unpredictable factors, and while using the Application on one trading account may result in profits, the same Application on another account may result in losses. There exist a high risk of many unpredictable factors and even the smallest details may lead to very different results and output and overall behaviour of the Application when used on different trading accounts within the same enviroment and/or within the same conditions.
                    </p>
                    <p>
                        4.4 The Application, its behaviour, results, success ratio and overall performance is highly unpredictable, speculative, and comes with no guarantee whatsoever.
                    </p>
                    <p>
                        4.5 Past profits are no guarantee of future profits. Any profitable trading strategy (including the Application) can cause significant losses of your financial funds. The Application comes with no guarantee whatsoever. There exists no guarantee of profits and there exists no guarantee of the elimination of any risks when using the Application.
                    </p>
                    <p>
                        4.6 When using the Application you hereby waive of all of your rights and claims to require any kind of compensation(s) (and/or its parts) for any kind of damage(s) (and/or its parts) associated and/or arising from and/or resulting from using the Application, from any third party(ies) (including but not limited to the creator(s) and/or author(s) and/or distributor(s) and/or propagator(s) of the Application). This paragraph includes (but is not limited to) any kind of financial and non-financial (both direct and indirect) damages, financial losses, trading losses, technical damages, damages of hardware and/or software equipment.
                    </p>
                    <p>
                        4.7 The Account and all underlying financial funds on it is held and safeguarded by a third party which provides you with its trading services and which maintains the Account. It is your sole responsibility and obligation to pay attention to all risks related to and/or associated with such third party and its services.
                    </p>
                    <p>
                        4.8 The use of the Application may have a significantly negative impact on your life-style and your financial status.
                    </p>







                    <h4>5. DISCLAIMER</h4>
                    <p>
                        5.1 No third party(ies) (including but not limited to the creator(s) and/or author(s) and/or distributor(s) and/or propagator(s) of the Application) is responsible (financially or otherwise) for any kind of losses and/or damages and/or consequences (including but not limited to financial and non-financial damages, financial losses, trading losses) associated and/or arising from using the Application (both directly and/or indirectly).
                    </p>
                    <p>
                        5.2 The Application (including but not limited to the creator(s) and/or author(s) and/or distributor(s) and/or propagator(s) of the Application) does not take any responsibility for receiving or processing or storage of your deposits nor for a financial integrity and/or liquidity of your funds.
                    </p>
                    <p>
                        5.3 The Application (including but not limited to the creator(s) and/or author(s) and/or distributor(s) and/or propagator(s) of the Application) does not take any responsibility for trading services provided to you by any third party, and/or for any risks associated directly or indirectly with such services and/or with such third parties.
                    </p>
                    <p>
                        5.4 The Application (including but not limited to the creator(s) and/or author(s) and/or distributor(s) and/or propagator(s) of the Application) provides no guarantee of comparability (incl. but not limited to equality, similarity, correlation) of a trading results, or a trading performance, or a success ratio etc. between two trading accounts where the Application was used within the same enviroment and/or within the same inputs and/or within the same input factors.
                    </p>
                    <p>
                        5.5 All promo materials, which mention and/or describe and/or explain and/or promote this Application, including but not limited to information, descriptions, explanations, statistics, previous performance, statistics of other trading accounts, calculations etc., have only informative character and their accurancy is not guaranteed.
                    </p>







                    <h4>6. OTHER PROVISIONS</h4>
                    <p>
                        6.1 The Account is not an account of the Application.
                    </p>
                    <p>
                        6.2 The Application (including but not limited to the creator(s) and/or author(s) and/or distributor(s) and/or propagator(s) of the Application) does not receive or process or hold or store your trading deposits. Your trading deposits are received, processed and stored on your private trading account (the Account) within a third party service provider (the Broker) which provides you with the Account and with the trading services.
                    </p>
                    <p>
                        6.3 Deposit instructions, shown within the Application, are instructions downloaded from the Account which the Application is connected into. The Application does not guarantee safety or accuracy of such instructions.
                    </p>







                    <h4>7. PRICING</h4>
                    <p>
                        7.1 The price for using the Application is set to 10% from total Net Profit generated on the Account by the Application.
                        The term "Net Profit" means resulting sum of all positive trades (profits) and negative trades (losses) together per each specific period (each 3 months),
                        and it includes only such trades which were opened and closed by the Application only.
                    </p>
                    <p>
                        7.2 The Price is calculated and payable each time after 3 calendar months of using the Application.
                    </p>
                    <p>
                        7.3 Except the Price described in this article, there is no other price(s) and/or fee(s) for using the Application.
                    </p>
                    <p>
                        7.4 If the Price is not paid, then the Application will be blocked automatically, and it will not be possible to use the Application anymore.
                    </p>
                    <p>
                        7.5 When the Price is paid, it immediately becomes irreversible and nonrefundable.
                    </p>
                    <p>
                        7.6 There will be no price(s) and/or fee(s) for using the Application in case if there is no Net Profit on the Account, or in case if the Net Profit is negative (a loss).
                    </p>
                    <p>
                        7.7 There will be no price(s) and/or fee(s) for using the Application other than the Price specified in these Terms of Use.
                    </p>








                    <h4>8. FINAL PROVISIONS</h4>
                    <p>
                        8.1 You declare that you are fully familiar with trading on Forex markets and with all principles of such trading with the Application and you are using the Application at your own risk.
                    </p>
                    <p>
                        8.2 You declare that using the Application is your free choice and of your own free will, and, you declare that you can stop using the Application at any time as you wish and freely decide.
                    </p>
                    <p>
                        8.3 You declare that you will not interpret or consider the use of the Application as the provision of financial and/or investment services, or the provision of financial and/or investment advice, or the provision of asset management services, in any context or under any circumstances.
                    </p>
                    <p>
                        8.4 You declare that using the Application does not violate and/or is not in conflict with any of your domestic law(s), and, it does not violate any law(s) and/or regulation(s) set by any authority(ies) in your and/or in any other jurisdiction(s).
                    </p>
                    <p>
                        8.5 You declare that you are fully familiar with using the Application, how to start and stop using it and how to start and stop all the trading functions and operations of the Application anytime you wish.
                    </p>
                    <p>
                        8.6 You declare there exists no obstacles both in launching and in terminating the Application.
                    </p>
                    <p>
                        8.7 You declare that you have fully and carefully read and understood the full content of these Terms of Use and you fully accept and agree with these Terms of Use in its full content and these Terms of Use are legally binding to you.
                    </p>
                    <p>
                        8.8 You declare that in case if you use CarinaBot VPS, which is available on <a href="https://vps.carinabot.com" target="_blank">https://vps.carinabot.com</a>,
                        you have fully and carefully read and understood the full content of Terms of Use VPS, which is available on <a href="https://www.carinabot.com/terms-of-use-vps.html" target="_blank">https://www.carinabot.com/terms-of-use-vps.html</a>,
                        and you fully accept and agree with the Terms of Use VPS in its full content and the Terms of Use VPS are legally binding to you.
                    </p>
                </div>

            </section>
        </>
    )
}

export default Terms