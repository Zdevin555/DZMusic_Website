import styled from 'styled-components';
import pic1 from '@/assets/img/comesoon.png';

export const ComeSoonWrapper = styled.div`
    .content{
        height:75vh;
        display:flex;
        align-items:center;
        justify-content:center;

        .bg-img{
            background:url(${pic1}) center center no-repeat;
            background-size:619px auto;
            width:619px;
            height:370px;
            position:relative;

            @keyframes tail {
                0% {
                    transform: rotate(-10deg);
                }

                5%{
                    transform: rotate(30deg);
                }

                10% {
                    transform: rotate(-2deg);
                }

                16.6666666667% {
                    transform: rotate(10deg);
                }

                20% {
                    transform: rotate(0);
                }

                46.6666666667% {
                    transform: rotate(10deg);
                }

                53.3333333333% {
                    transform: rotate(-5deg);
                }

                56.6666666667% {
                    transform: rotate(10deg);
                }

                66.666666667%{
                    transform: rotate(0);
                }
                76.666666667%{
                    transform: rotate(10deg);
                }
                86.666666667%{
                    transform: rotate(2deg);
                }
                90%{
                    transform: rotate(0);
                }
                96.666666667%{
                    transform: rotate(2deg);
                }
            }

            @keyframes cat-animation {
                6.6666666667% {
                    transform: scaleY(1);
                }

                10% {
                    transform: scaleY(1.15);
                }

                16.6666666667% {
                    transform: scaleY(1);
                }

                20% {
                    transform: scaleY(1.25);
                }

                26.6666666667% {
                    transform: scaleY(1);
                }

                46.6666666667% {
                    transform: scaleY(1.15);
                }

                53.3333333333% {
                    transform: scaleY(1);
                }

                56.6666666667% {
                    transform: scaleY(1.15);
                }
            }

            @keyframes left-whisker {
                6.6666666667% {
                    transform: rotate(0);
                }

                10% {
                    transform: rotate(0deg);
                }

                16.6666666667% {
                    transform: rotate(-5deg);
                }

                20% {
                    transform: rotate(0deg);
                }

                26.6666666667% {
                    transform: rotate(0deg);
                }

                46.6666666667% {
                    transform: rotate(10deg);
                }

                53.3333333333% {
                    transform: rotate(-5deg);
                }

                56.6666666667% {
                    transform: rotate(10deg);
                }
            }

            @keyframes right-whisker {
                6.6666666667% {
                    transform: rotate(180deg);
                }

                10% {
                    transform: rotate(190deg);
                }

                16.6666666667% {
                    transform: rotate(180deg);
                }

                20% {
                    transform: rotate(175deg);
                }

                26.6666666667% {
                    transform: rotate(190deg);
                }

                46.6666666667% {
                    transform: rotate(180deg);
                }

                53.3333333333% {
                    transform: rotate(185deg);
                }

                56.6666666667% {
                    transform: rotate(175deg);
                }
            }

            @keyframes left-ear {
                0% {
                    transform: rotate(-20deg);
                }

                6.6666666667% {
                    transform: rotate(-6deg);
                }

                13.3333333333% {
                    transform: rotate(-15deg);
                }

                26.6666666667% {
                    transform: rotate(-15deg);
                }

                33.3333333333% {
                    transform: rotate(-30deg);
                }

                40% {
                    transform: rotate(-30deg);
                }

                46.6666666667% {
                    transform: rotate(0deg);
                }

                53.3333333333% {
                    transform: rotate(0deg);
                }

                60% {
                    transform: rotate(-15deg);
                }

                80% {
                    transform: rotate(-15deg);
                }

                93.3333333333% {
                    transform: rotate(-6deg);
                }

                100% {
                    transform: rotateZ(-6deg);
                }
            }

            @keyframes right-ear {
                0% {
                    transform: rotateZ(-16deg);
                }

                6.6666666667% {
                    transform: rotateZ(-16deg);
                }

                13.3333333333% {
                    transform: rotateZ(-19deg);
                }

                26.6666666667% {
                    transform: rotateZ(-19deg);
                }

                33.3333333333% {
                    transform: rotateZ(-30deg);
                }

                36.6666666667% {
                    transform: rotateZ(-19deg);
                }

                37.3333333333% {
                    transform: rotateZ(-30deg);
                }

                38% {
                    transform: rotateZ(-19deg);
                }

                40% {
                    transform: rotateZ(-19deg);
                }

                40.6666666667% {
                    transform: rotateZ(-30deg);
                }

                41.3333333333% {
                    transform: rotateZ(-19deg);
                }

                46.6666666667% {
                    transform: rotateZ(-9deg);
                }

                53.3333333333% {
                    transform: rotateZ(-9deg);
                }

                60% {
                    transform: rotateZ(-19deg);
                }

                60.6666666667% {
                    transform: rotateZ(-30deg);
                }

                61.3333333333% {
                    transform: rotateZ(-19deg);
                }

                62.6666666667% {
                    transform: rotateZ(-19deg);
                }

                63.3333333333% {
                    transform: rotateZ(-30deg);
                }

                64% {
                    transform: rotateZ(-19deg);
                }

                80% {
                    transform: rotateZ(-19deg);
                }

                93.3333333333% {
                    transform: rotateZ(-16deg);
                }

                100% {
                    transform: rotateZ(-16deg);
                }
            }

            .cat-animation {
                height: 400px;
                width: 400px;
                position: absolute;
                left:50%;
                top:50%;
                transform: translateX(-30%) translateY(-15%);

                .stand {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%);
                    height: 20px;
                    width: 200px;
                    border-radius: 20px;
                    background-color: #fd6e72;
                    z-index: 2;
                }
            }

            .notice{
                position:absolute;
                top:-110px;
                left:-120px;
                color: turquoise;
                font-size:16px;

                .char {
                    offset-path: path('M 500 525 C 300 600 150 600 100 400 A 60 50 0 1 1 750 275');
                    offset-distance: calc(var(--char-index) * 10px);
                    position: absolute;
                    animation: loop 5950ms cubic-bezier(.62,.01,.42,1.01) infinite alternate calc(var(--char-index) * 10ms);
                }

                @keyframes loop {
                    50% {
                        offset-distance: calc((var(--char-index) * 33px) + 700px);
                        color: hotpink;
                    }
                    100% {
                        offset-distance: calc((var(--char-index) * 10px) + 1080px);
                    }
                }
            }
        }
    
    }
`;

export const Cat = styled.div`
    width: 110px;
    height: 50px;
    position: absolute;
    top: calc(50% - 50px);
    right: 130px;
    border-top-left-radius: 100px;
    border-top-right-radius: 100px;

    .cat-body {
        width: 110px;
        height: 50px;
        background-color: #745260;
        position: absolute;
        border-top-left-radius: 100px;
        border-top-right-radius: 100px;
        animation: body 12s none infinite;
    }

    .cat-head {
        content: "";
        width: 70px;
        height: 35px;
        background-color: #745260;
        position: absolute;
        top: calc(50% - 10px);
        left: -40px;
        border-top-left-radius: 80px;
        border-top-right-radius: 80px;

        .ear {
            position: absolute;
            left: 4px;
            top: -4px;
            width: 0;
            height: 0;
            border-left: 12px solid transparent;
            border-right: 12px solid transparent;
            border-bottom: 20px solid #745260;
            transform: rotate(-30deg);
            animation: left-ear 12s both infinite;
        }

        .ear+.ear {
            animation: right-ear 12s both infinite;
            top: -12px;
            left: 30px;
        }
    }

    .cat-face{
        .nose {
            position: absolute;
            bottom: 10px;
            left: -10px;
            background-color: #fd6e72;
            height: 5px;
            width: 5px;
            border-radius: 50%;
        }

        .whisker-container {
            position: absolute;
            bottom: 5px;
            left: -36px;
            width: 20px;
            height: 10px;
            transform-origin: right;
            animation: left-whisker 12s both infinite;
        }

        .whisker-container:nth-child(2) {
            left: -20px;
            bottom: 12px;
            transform-origin: right;
            transform: rotate(180deg);
            animation: right-whisker 12s both infinite;
        }

        .whisker {
            position: absolute;
            top: 0;
            width: 100%;
            border: 1px solid #fdf9de;
            transform-origin: 100% 0;
            transform: rotate(10deg);
        }

        .whisker:last-child {
            top: 0;
            transform: rotate(-20deg);
        }
    }

    .cat-tail-container {
        position: absolute;
        right: 0;
        bottom: -13px;
        z-index: 3;

        .tail {
            position: absolute;
            height: 30px;
            width: 14px;
            bottom: -10px;
            right: 0;
            border-bottom-right-radius: 5px;
            background: #745260;
            z-index: 0;
        }

        .tail>.tail {
            animation: tail 12s none infinite;
            height: 100%;
            width: 14px;
            transform-origin: left;
            border-bottom-left-radius: 20px 20px;
            border-bottom-right-radius: 20px 20px;
            border-top-right-radius: 40px;
        }
    }
`;