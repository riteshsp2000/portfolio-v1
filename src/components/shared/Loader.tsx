import React, {useEffect} from 'react';

// Libraries
import styled, {keyframes} from 'styled-components';

// Constants
import {BREAKPOINTS} from '../../theming';

const lineAnim = keyframes`
  to {
     stroke-dashoffset: 0;
  }
`;

const fill = keyframes`
  from {
    fill: transparent;
  }

  to {
    fill: var(--color-text)
  }
`;

// @ts-ignore
const Container = styled.div<{mounted: boolean}>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10002;

  width: 100%;
  height: 100vh;
  opacity: ${({mounted}) => (mounted ? 1 : 0)};
  transition: opacity 200ms ease 0s;

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-background);
`;

const StyledVector = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: ${fill} 0.5s ease forwards 3s;

  width: 50%;
  height: auto;

  @media ${BREAKPOINTS.md} {
    width: 85%;
    height: auto;
  }

  & path:nth-child(1) {
    stroke-dasharray: 572px;
    stroke-dashoffset: 572px;
    animation: ${lineAnim} 2s ease forwards;
    stroke: var(--color-text);
  }
  & path:nth-child(2) {
    stroke-dasharray: 516px;
    stroke-dashoffset: 516px;
    animation: ${lineAnim} 2s ease forwards 0.2s;
    stroke: var(--color-text);
  }
  & path:nth-child(3) {
    stroke-dasharray: 356px;
    stroke-dashoffset: 356px;
    animation: ${lineAnim} 2s ease forwards 0.4s;
    stroke: var(--color-text);
  }
  & path:nth-child(4) {
    stroke-dasharray: 515px;
    stroke-dashoffset: 515px;
    animation: ${lineAnim} 2s ease forwards 0.6s;
    stroke: var(--color-text);
  }
  & path:nth-child(5) {
    stroke-dasharray: 242px;
    stroke-dashoffset: 242px;
    animation: ${lineAnim} 2s ease forwards 0.8s;
    stroke: var(--color-text);
  }
  & path:nth-child(6) {
    stroke-dasharray: 434px;
    stroke-dashoffset: 434px;
    animation: ${lineAnim} 2s ease forwards 1s;
    stroke: var(--color-text);
  }
  & path:nth-child(7) {
    stroke-dasharray: 582px;
    stroke-dashoffset: 582px;
    animation: ${lineAnim} 2s ease forwards 1.2s;
    stroke: var(--color-text);
  }
  & path:nth-child(8) {
    stroke-dasharray: 516px;
    stroke-dashoffset: 516px;
    animation: ${lineAnim} 2s ease forwards 1.4s;
    stroke: var(--color-text);
  }
  & path:nth-child(9) {
    stroke-dasharray: 246px;
    stroke-dashoffset: 246px;
    animation: ${lineAnim} 2s ease forwards 1.6s;
    stroke: var(--color-text);
  }
`;

const svg = (
  <StyledVector
    id="vector"
    width="720"
    height="150"
    viewBox="0 0 720 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M34.336 9.632C45.28 9.632 54.736 11.696 62.704 15.824C70.768 19.856 76.912 25.664 81.136 33.248C85.456 40.832 87.616 49.76 87.616 60.032C87.616 70.304 85.456 79.232 81.136 86.816C76.912 94.304 70.768 100.064 62.704 104.096C54.736 108.032 45.28 110 34.336 110H3.08801V9.632H34.336ZM34.336 99.2C47.296 99.2 57.184 95.792 64 88.976C70.816 82.064 74.224 72.416 74.224 60.032C74.224 47.552 70.768 37.808 63.856 30.8C57.04 23.792 47.2 20.288 34.336 20.288H16.192V99.2H34.336Z"
      stroke="white"
      strokeWidth="5"
    />
    <path
      d="M176.901 67.52C176.901 70.016 176.757 72.656 176.469 75.44H113.397C113.877 83.216 116.517 89.312 121.317 93.728C126.213 98.048 132.117 100.208 139.029 100.208C144.693 100.208 149.397 98.912 153.141 96.32C156.981 93.632 159.669 90.08 161.205 85.664H175.317C173.205 93.248 168.981 99.44 162.645 104.24C156.309 108.944 148.437 111.296 139.029 111.296C131.541 111.296 124.821 109.616 118.869 106.256C113.013 102.896 108.405 98.144 105.045 92C101.685 85.76 100.005 78.56 100.005 70.4C100.005 62.24 101.637 55.088 104.901 48.944C108.165 42.8 112.725 38.096 118.581 34.832C124.533 31.472 131.349 29.792 139.029 29.792C146.517 29.792 153.141 31.424 158.901 34.688C164.661 37.952 169.077 42.464 172.149 48.224C175.317 53.888 176.901 60.32 176.901 67.52ZM163.365 64.784C163.365 59.792 162.261 55.52 160.053 51.968C157.845 48.32 154.821 45.584 150.981 43.76C147.237 41.84 143.061 40.88 138.453 40.88C131.829 40.88 126.165 42.992 121.461 47.216C116.853 51.44 114.213 57.296 113.541 64.784H163.365Z"
      stroke="white"
      strokeWidth="5"
    />
    <path
      d="M223.573 97.904L248.053 31.088H262.021L231.061 110H215.797L184.837 31.088H198.949L223.573 97.904Z"
      stroke="white"
      strokeWidth="5"
    />
    <path
      d="M346.916 67.52C346.916 70.016 346.772 72.656 346.484 75.44H283.412C283.892 83.216 286.532 89.312 291.332 93.728C296.228 98.048 302.132 100.208 309.044 100.208C314.708 100.208 319.412 98.912 323.156 96.32C326.996 93.632 329.684 90.08 331.22 85.664H345.332C343.22 93.248 338.996 99.44 332.66 104.24C326.324 108.944 318.452 111.296 309.044 111.296C301.556 111.296 294.836 109.616 288.884 106.256C283.028 102.896 278.42 98.144 275.06 92C271.7 85.76 270.02 78.56 270.02 70.4C270.02 62.24 271.652 55.088 274.916 48.944C278.18 42.8 282.74 38.096 288.596 34.832C294.548 31.472 301.364 29.792 309.044 29.792C316.532 29.792 323.156 31.424 328.916 34.688C334.676 37.952 339.092 42.464 342.164 48.224C345.332 53.888 346.916 60.32 346.916 67.52ZM333.38 64.784C333.38 59.792 332.276 55.52 330.068 51.968C327.86 48.32 324.836 45.584 320.996 43.76C317.252 41.84 313.076 40.88 308.468 40.88C301.844 40.88 296.18 42.992 291.476 47.216C286.868 51.44 284.228 57.296 283.556 64.784H333.38Z"
      stroke="white"
      strokeWidth="5"
    />
    <path
      d="M377.317 3.44V110H364.213V3.44H377.317Z"
      stroke="white"
      strokeWidth="5"
    />
    <path
      d="M434.066 111.296C426.674 111.296 419.954 109.616 413.906 106.256C407.954 102.896 403.25 98.144 399.794 92C396.434 85.76 394.754 78.56 394.754 70.4C394.754 62.336 396.483 55.232 399.939 49.088C403.491 42.848 408.291 38.096 414.339 34.832C420.387 31.472 427.155 29.792 434.643 29.792C442.131 29.792 448.899 31.472 454.947 34.832C460.995 38.096 465.747 42.8 469.203 48.944C472.755 55.088 474.531 62.24 474.531 70.4C474.531 78.56 472.706 85.76 469.058 92C465.506 98.144 460.658 102.896 454.514 106.256C448.37 109.616 441.554 111.296 434.066 111.296ZM434.066 99.776C438.77 99.776 443.187 98.672 447.315 96.464C451.443 94.256 454.755 90.944 457.251 86.528C459.843 82.112 461.138 76.736 461.138 70.4C461.138 64.064 459.891 58.688 457.395 54.272C454.899 49.856 451.635 46.592 447.603 44.48C443.571 42.272 439.203 41.168 434.499 41.168C429.699 41.168 425.282 42.272 421.25 44.48C417.314 46.592 414.146 49.856 411.746 54.272C409.346 58.688 408.147 64.064 408.147 70.4C408.147 76.832 409.299 82.256 411.603 86.672C414.003 91.088 417.171 94.4 421.107 96.608C425.043 98.72 429.362 99.776 434.066 99.776Z"
      stroke="white"
      strokeWidth="5"
    />
    <path
      d="M504.864 45.632C507.456 41.12 511.296 37.376 516.384 34.4C521.568 31.328 527.568 29.792 534.384 29.792C541.392 29.792 547.728 31.472 553.392 34.832C559.152 38.192 563.664 42.944 566.928 49.088C570.192 55.136 571.824 62.192 571.824 70.256C571.824 78.224 570.192 85.328 566.928 91.568C563.664 97.808 559.152 102.656 553.392 106.112C547.728 109.568 541.392 111.296 534.384 111.296C527.664 111.296 521.712 109.808 516.528 106.832C511.44 103.76 507.552 99.968 504.864 95.456V147.44H491.76V31.088H504.864V45.632ZM558.432 70.256C558.432 64.304 557.232 59.12 554.832 54.704C552.432 50.288 549.168 46.928 545.04 44.624C541.008 42.32 536.544 41.168 531.648 41.168C526.848 41.168 522.384 42.368 518.256 44.768C514.224 47.072 510.96 50.48 508.464 54.992C506.064 59.408 504.864 64.544 504.864 70.4C504.864 76.352 506.064 81.584 508.464 86.096C510.96 90.512 514.224 93.92 518.256 96.32C522.384 98.624 526.848 99.776 531.648 99.776C536.544 99.776 541.008 98.624 545.04 96.32C549.168 93.92 552.432 90.512 554.832 86.096C557.232 81.584 558.432 76.304 558.432 70.256Z"
      stroke="white"
      strokeWidth="5"
    />
    <path
      d="M661.072 67.52C661.072 70.016 660.928 72.656 660.64 75.44H597.568C598.048 83.216 600.688 89.312 605.488 93.728C610.384 98.048 616.288 100.208 623.2 100.208C628.864 100.208 633.568 98.912 637.312 96.32C641.152 93.632 643.84 90.08 645.376 85.664H659.488C657.376 93.248 653.152 99.44 646.816 104.24C640.48 108.944 632.608 111.296 623.2 111.296C615.712 111.296 608.992 109.616 603.04 106.256C597.184 102.896 592.576 98.144 589.216 92C585.856 85.76 584.176 78.56 584.176 70.4C584.176 62.24 585.808 55.088 589.072 48.944C592.336 42.8 596.896 38.096 602.752 34.832C608.704 31.472 615.52 29.792 623.2 29.792C630.688 29.792 637.312 31.424 643.072 34.688C648.832 37.952 653.248 42.464 656.32 48.224C659.488 53.888 661.072 60.32 661.072 67.52ZM647.536 64.784C647.536 59.792 646.432 55.52 644.224 51.968C642.016 48.32 638.992 45.584 635.152 43.76C631.408 41.84 627.232 40.88 622.624 40.88C616 40.88 610.336 42.992 605.632 47.216C601.024 51.44 598.384 57.296 597.712 64.784H647.536Z"
      stroke="white"
      strokeWidth="5"
    />
    <path
      d="M691.473 43.904C693.777 39.392 697.041 35.888 701.265 33.392C705.585 30.896 710.817 29.648 716.961 29.648V43.184H713.505C698.817 43.184 691.473 51.152 691.473 67.088V110H678.369V31.088H691.473V43.904Z"
      stroke="white"
      strokeWidth="5"
    />
  </StyledVector>
);

const Loader: React.FC<{setLoading?: (param: boolean) => void}> = ({
  setLoading,
}) => {
  const [mounted, setMounted] = React.useState(true);

  useEffect(() => {
    if (setLoading) {
      setTimeout(() => {
        setMounted(false);
        setTimeout(() => setLoading(false), 200);
      }, 3500);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // @ts-ignore
  return <Container mounted={mounted}>{svg}</Container>;
};

export default Loader;
