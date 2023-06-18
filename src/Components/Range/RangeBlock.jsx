import React, { useEffect } from 'react';
import './RangeBlock.css';
import { useState } from 'react';
import { Range, getTrackBackground } from "react-range";


function RangeBlock(propsData) {

    const [values, setValues] = useState([propsData.min + 1]);

    const handleRangeChange = (newValues) => {
        setValues(newValues);
    };

    function updateMainValue() {
        propsData.updateValue(values[0]);
    }


    useEffect(() => {
        var value;
        if (propsData.type !== 'date') {
            if (propsData.min < 100) {
                value = [4]
            } else {
                value = [propsData.min + 30000]
            }
        } else {
            value = [12]
        }
        setValues(value);
        propsData.updateValue(value[0]);
    }, [propsData.min, propsData.currency]);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
            }}
        >
            <Range
                values={values}
                step={propsData.step}
                min={propsData.min}
                max={propsData.max}
                onChange={handleRangeChange}
                onFinalChange={updateMainValue}
                renderTrack={({ props, children }) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                        style={{
                            ...props.style,
                            height: "36px",
                            display: "flex",
                            width: "100%"
                        }}
                    >
                        <div
                            ref={props.ref}
                            style={{
                                height: "10px",
                                width: "100%",
                                borderRadius: "8px",
                                background: getTrackBackground({
                                    values,
                                    colors: ["rgb(99, 134, 69)", "#ccc"],
                                    min: propsData.min,
                                    max: propsData.max
                                }),
                                alignSelf: "center"
                            }}
                        >
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({ props, isDragged }) => (
                    <div
                        {...props}
                        style={{
                            ...props.style,
                            height: "24px",
                            width: "24px",
                            borderRadius: "100px",
                            border: "2px solid rgb(99, 134, 69)",
                            backgroundColor: "#FFF",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            boxShadow: "0px 2px 6px #AAA"
                        }}
                    >
                        <div
                            style={{
                                height: "100%",
                                width: "100%",
                                backgroundColor: isDragged ? "#548BF4" : "#CCC"
                            }}
                            className='rangeThumb'
                        >{propsData.symbol}</div>
                    </div>

                )}
            />
            <div className='rangeResult'>
                {
                    propsData.type === 'date'
                        ? values[0] > 11 ? `${(values[0] / 12).toFixed(0)} year${(values[0] / 12).toFixed(0) === '1' ? '' : 's'}` : `${values[0]} months`
                        : propsData.symbol === "₿" || propsData.symbol === "Ξ"
                            ? values[0].toFixed(2) + ' ' + propsData.symbol
                            : propsData.symbol + ' ' + values[0].toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0, useGrouping: true })
                }
            </div>
        </div>
    );
};

export default RangeBlock;