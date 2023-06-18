const config = {
    apiUrl: "https://platform.torobase.com",
    credentials: {
        apiKey: "AKVDXDR9YBU35X7",
        secretKey: "7LbHZHGgCvuz6XzSEvMU"
    },
    design: {
        design: {
            loginUrl: "https://platform.torobase.com/?apiKey=AKVDXDR9YBU35X7&secret=7LbHZHGgCvuz6XzSEvMU",
            lineChart: {
                numberFormat: "en-US",
                dateFormat: "LL",
                intervals: [{
                    label: "3 Months",
                    fromDate: a => a.subtract(3, "month").startOf("month").format("YYYY-MM-DDTHH:MM:ss"),
                    toDate: a => a.endOf("month").format("YYYY-MM-DDTHH:MM:ss")
                }, {
                    label: "6 Months",
                    fromDate: a => a.subtract(6, "month").startOf("month").format("YYYY-MM-DDTHH:MM:ss"),
                    toDate: a => a.endOf("month").format("YYYY-MM-DDTHH:MM:ss")
                }, {
                    label: "All",
                    fromDate: void 0,
                    toDate: void 0
                }],
                monthSelectorColor: {
                    color: "#fff",
                    backgroundColor: "rgba(0, 0, 0, 0)",
                    fontColor: "#fff",
                    active: {
                        color: "#fff",
                        backgroundColor: "#fff",
                        fontColor: "#1b1b1b"
                    }
                },
                color: "#fff",
                fontColor: "#bbb",
                showXLabels: !1,
                showYLabels: !0,
                horizontalGridLinesColor: "rgb(40, 40, 40)",
                verticalGridLinesColor: "rgba(0, 0, 0, 0)",
                backgroundColor: {
                    start: "rgba(99, 134, 69, 1)",
                    end: "rgba(0, 0, 0, 0.0)"
                }
            },
            tradingCalculatorChart: {
                currencies: [{
                    code: "USD",
                    name: "USD (US Dollars)",
                    symbol: "$",
                    min: 100,
                    max: 1e5,
                    defaultValue: 50e3,
                    decimals: !0
                }, {
                    code: "EUR",
                    name: "EUR (Euro)",
                    symbol: "в‚¬",
                    min: 100,
                    max: 1e5,
                    defaultValue: 50e3,
                    decimals: !0
                }, {
                    code: "BTC",
                    name: "BTC (Bitcoin)",
                    symbol: "\u20BF",
                    min: .01,
                    max: 5,
                    defaultValue: 2500,
                    decimals: 3
                }, {
                    code: "ETH",
                    name: "ETH (Ethereum)",
                    symbol: "\u039E",
                    min: 1,
                    max: 100,
                    defaultValue: 5000,
                    decimals: 2
                }],
                sliders: {
                    investment: {
                        label: "Initial investment",
                        style: {
                            color: "rgb(99, 134, 69)",
                            height: 10,
                            dotSize: 24
                        }
                    },
                    investmentTime: {
                        label: "Length of investment",
                        values: [{
                            name: "2 Months",
                            groupBy: "month",
                            months: 2
                        }, {
                            name: "3 Months",
                            groupBy: "month",
                            months: 3
                        }, {
                            name: "4 Months",
                            groupBy: "month",
                            months: 4
                        }, {
                            name: "5 Months",
                            groupBy: "month",
                            months: 5
                        }, {
                            name: "6 Months",
                            groupBy: "month",
                            months: 6
                        }, {
                            name: "7 Months",
                            groupBy: "month",
                            months: 7
                        }, {
                            name: "8 Months",
                            groupBy: "month",
                            months: 8
                        }, {
                            name: "9 Months",
                            groupBy: "month",
                            months: 9
                        }, {
                            name: "10 Months",
                            groupBy: "month",
                            months: 10
                        }, {
                            name: "11 Months",
                            groupBy: "month",
                            months: 11
                        }, {
                            name: "1 Year",
                            groupBy: "year",
                            months: 12
                        }, {
                            name: "2 Years",
                            groupBy: "year",
                            months: 24
                        }, {
                            name: "3 Years",
                            groupBy: "year",
                            months: 36
                        }],
                        defaultValue: 10,
                        style: {
                            color: "rgb(99, 134, 69)",
                            height: 10,
                            dotSize: 24
                        }
                    }
                },
                dateFormat: "LL",
                numberFormat: "en-US",
                resultFontColor: "rgb(99, 134, 69)",
                color: "rgb(40, 40, 40)",
                fontColor: "#484848",
                showXLabels: !1,
                showYLabels: !0,
                horizontalGridLinesColor: "#f5f5f5",
                verticalGridLinesColor: "#f5f5f5",
                backgroundColor: {
                    start: "rgba(123, 152, 98, 1)",
                    end: "rgba(83, 112, 58, 1)"
                },
                balanceValue: 1.039,
                numberRandomizerAlgorithm(b) {
                    let e = [1, 1.012, .988, 1.009, 1.018, .991, 1.005, .982, .995],
                        c = -1,
                        d = [];
                    for (let a = 0; a < b.length; a++) a === b.length - 1 ? d.push(b[a]) : (++c === e.length && (c = 0), d.push(b[a] * e[c]));
                    return d
                }
            }
        }
    }
};

export default config;