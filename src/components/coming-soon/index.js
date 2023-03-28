import React, { memo } from 'react';

import {
    tranStrToCharArr
} from '@/utils/data-format'

import {
    ComeSoonWrapper,
    Cat
} from './style'

const DZComeSoon = memo(() => {

    const str = "New Features Coming Soon";
    let count = 0;
    return (
        <ComeSoonWrapper>
            <div className="wrap-v2 content">
                <div className="bg-img">
                    <div className="cat-animation">
                        <span className="stand" />
                        <Cat className="cat">
                            <div className="cat-body" />
                            <div className="cat-head">
                                <div className="ear"></div>
                                <div className="ear"></div>
                            </div>
                            <div className="cat-face">
                                <div className="nose" />
                                <div className="whisker-container">
                                    <div className="whisker" />
                                    <div className="whisker" />
                                </div>
                                <div className="whisker-container">
                                    <div className="whisker" />
                                    <div className="whisker" />
                                </div>
                            </div>
                            <div className="cat-tail-container">
                                <div className="tail">
                                    <div className="tail">
                                        <div className="tail">
                                            <div className="tail">
                                                <div className="tail">
                                                    <div className="tail">
                                                        <div className="tail"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Cat>
                    </div>
                    <div className="notice">
                        {
                            str.split(" ").map((wordItem,index)=>{
                                return (
                                    <span className="word" key={wordItem+index}>
                                        {
                                            tranStrToCharArr(wordItem).map((charItem)=>{
                                                return (
                                                    <span className="char" data-char={charItem} style={{"--char-index":count++}}>{charItem}</span>
                                                )
                                            })
                                        }
                                        {str.length-1 >= count?<span style={{"--char-index":count++}}/>:""}
                                    </span>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </ComeSoonWrapper>
    )
})

export default DZComeSoon


