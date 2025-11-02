/**
 * Style.jsx
 * -------------------------------------------------
 * Generates <style> tag with:
 *   • Heading, Description, Button: typography, colour, padding, margin (responsive)
 *   • Section background (solid colour OR gradient)
 *   • Section padding & margin (responsive)
 */
import { __ } from '@wordpress/i18n';

const Style = ({ attributes }) => {
    const {
        headingColor,
        headingFontFamily,
        headingFontWeight,
        headingTextTransform,
        headingFontSizeDesktop,
        headingFontSizeTablet,
        headingFontSizeMobile,
        headingLineHeightDesktop,
        headingLineHeightTablet,
        headingLineHeightMobile,
        headingPadding,
        headingMargin,
        descriptionColor,
        descriptionFontFamily,
        descriptionFontWeight,
        descriptionTextTransform,
        descriptionFontSizeDesktop,
        descriptionFontSizeTablet,
        descriptionFontSizeMobile,
        descriptionLineHeightDesktop,
        descriptionLineHeightTablet,
        descriptionLineHeightMobile,
        descriptionPadding,
        descriptionMargin,
        buttonFontFamily,
        buttonFontWeight,
        buttonTextTransform,
        buttonFontSizeDesktop,
        buttonFontSizeTablet,
        buttonFontSizeMobile,
        buttonLineHeightDesktop,
        buttonLineHeightTablet,
        buttonLineHeightMobile,
        buttonPadding,
        buttonMargin,
        buttonTextColor,
        buttonBgColor,
        bgType,
        bgColor,
        bgGradient1,
        bgGradient2,
        bgGradientAngle,
        sectionPadding,
        sectionMargin,
    } = attributes;

    /* ------------------------------------------------------------------
       HELPER: value + unit → CSS string (e.g. 20 → "20px")
       ------------------------------------------------------------------ */
    const formatSide = (val, unit = 'px') => {
        if (val === undefined || val === null || val === '') return `0${unit}`;
        const v = String(val).trim();
        return /\d\s*(px|%|em|rem|vh|vw)$/.test(v) ? v : `${v}${unit}`;
    };

    /* ------------------------------------------------------------------
       HELPER: responsive padding / margin strings (supports isLinked)
       ------------------------------------------------------------------ */
    const getResponsive = (obj) => {
        const desktop = obj?.desktop || {};
        const tablet = obj?.tablet || {};
        const mobile = obj?.mobile || {};

        const unitD = desktop.unit || 'px';
        const unitT = tablet.unit || unitD;
        const unitM = mobile.unit || unitT;

        const fmt = (side, u) => formatSide(side, u);

        // ---- Desktop -------------------------------------------------
        const dTop = fmt(desktop.top, unitD);
        const d = desktop.isLinked
            ? Array(4).fill(dTop).join(' ')
            : [fmt(desktop.top, unitD), fmt(desktop.right, unitD), fmt(desktop.bottom, unitD), fmt(desktop.left, unitD)].join(' ');

        // ---- Tablet --------------------------------------------------
        const tTop = fmt(tablet.top, unitT);
        const t = tablet.isLinked
            ? Array(4).fill(tTop).join(' ')
            : [fmt(tablet.top, unitT), fmt(tablet.right, unitT), fmt(tablet.bottom, unitT), fmt(tablet.left, unitT)].join(' ');

        // ---- Mobile --------------------------------------------------
        const mTop = fmt(mobile.top, unitM);
        const m = mobile.isLinked
            ? Array(4).fill(mTop).join(' ')
            : [fmt(mobile.top, unitM), fmt(mobile.right, unitM), fmt(mobile.bottom, unitM), fmt(mobile.left, unitM)].join(' ');

        return {
            desktop: d,
            tablet: t,
            mobile: m,
        };
    };

    /* ------------------------------------------------------------------
       Padding / Margin for every element
       ------------------------------------------------------------------ */
    const headingPad = getResponsive(headingPadding);
    const headingMar = getResponsive(headingMargin);
    const descPad = getResponsive(descriptionPadding);
    const descMar = getResponsive(descriptionMargin);
    const buttonPad = getResponsive(buttonPadding);
    const buttonMar = getResponsive(buttonMargin);
    const sectionPad = getResponsive(sectionPadding);
    const sectionMar = getResponsive(sectionMargin);

    /* ------------------------------------------------------------------
       BACKGROUND: solid colour or 2-colour gradient
       ------------------------------------------------------------------ */
    const backgroundCSS = (() => {
        if (bgType === 'gradient' && bgGradient1) {
            const stops = [`${bgGradient1} 0%`];
            stops.push(bgGradient2 ? `${bgGradient2} 100%` : `${bgGradient1}00 100%`);

            const angle = bgGradientAngle ?? 90;
            const map = { 0: 'to right', 90: 'to bottom', 180: 'to left', 270: 'to top' };
            const direction = map[angle] || `${angle}deg`;

            return `linear-gradient(${direction}, ${stops.join(', ')})`;
        }
        return bgColor;
    })();

    /* ------------------------------------------------------------------
       TYPOGRAPHY helper
       ------------------------------------------------------------------ */
    const typo = (prefix, family, weight, transform, size, lh) => `
		${family ? `font-family: ${family};` : ''}
		${weight ? `font-weight: ${weight};` : ''}
		${transform ? `text-transform: ${transform};` : ''}
		font-size: ${size || (prefix === 'heading' ? 40 : prefix === 'description' ? 16 : 14)}px;
		line-height: ${lh || 1.4};
	`;

    /* ------------------------------------------------------------------
       RENDER <style>
       ------------------------------------------------------------------ */
    return (
        <style>
            {`
				/* -------------------------------------------------
				   SECTION (container)
				   ------------------------------------------------- */
				.wp-block-create-block-call-to-action-block {
					background: ${backgroundCSS};
					padding: ${sectionPad.desktop};
					margin: ${sectionMar.desktop};
                    align-items: ${attributes?.alignment || 'center'};
				}

                .callToActionBlock {
                    text-align: ${attributes?.alignment || 'center'};
                }

				/* -------------------------------------------------
				   HEADING
				   ------------------------------------------------- */
				.wp-block-create-block-call-to-action-block .hero-content .main-heading {
					color: ${headingColor || 'inherit'};
					${typo('heading', headingFontFamily, headingFontWeight, headingTextTransform,
                headingFontSizeDesktop, headingLineHeightDesktop)}
					padding: ${headingPad.desktop};
					margin: ${headingMar.desktop};
				}

				/* -------------------------------------------------
				   DESCRIPTION
				   ------------------------------------------------- */
				.wp-block-create-block-call-to-action-block .hero-content .description {
					color: ${descriptionColor || 'inherit'};
					${typo('description', descriptionFontFamily, descriptionFontWeight, descriptionTextTransform,
                    descriptionFontSizeDesktop, descriptionLineHeightDesktop)}
					padding: ${descPad.desktop};
					margin: ${descMar.desktop};
				}

				/* -------------------------------------------------
				   BUTTON
				   ------------------------------------------------- */
				.wp-block-create-block-call-to-action-block .hero-content .cta-button {
					${typo('button', buttonFontFamily, buttonFontWeight, buttonTextTransform,
                        buttonFontSizeDesktop, buttonLineHeightDesktop)}
					padding: ${buttonPad.desktop};
					margin: ${buttonMar.desktop};
					display: inline-block;
                    color: ${buttonTextColor || 'inherit'};
                    background-color: ${buttonBgColor};
				}

				/* -------------------------------------------------
				   TABLET (≤1024px)
				   ------------------------------------------------- */
				@media (max-width: 1024px) {
					.wp-block-create-block-call-to-action-block {
						padding: ${sectionPad.tablet};
						margin: ${sectionMar.tablet};
					}
					.wp-block-create-block-call-to-action-block .hero-content .main-heading {
						font-size: ${headingFontSizeTablet || 32}px;
						line-height: ${headingLineHeightTablet || 1.3};
						padding: ${headingPad.tablet};
						margin: ${headingMar.tablet};
					}
					.wp-block-create-block-call-to-action-block .hero-content .description {
						font-size: ${descriptionFontSizeTablet || 15}px;
						line-height: ${descriptionLineHeightTablet || 1.5};
						padding: ${descPad.tablet};
						margin: ${descMar.tablet};
					}
					.wp-block-create-block-call-to-action-block .hero-content .cta-button {
						font-size: ${buttonFontSizeTablet || 14}px;
						line-height: ${buttonLineHeightTablet || 1.4};
						padding: ${buttonPad.tablet};
						margin: ${buttonMar.tablet};
					}
				}

				/* -------------------------------------------------
				   MOBILE (≤767px)
				   ------------------------------------------------- */
				@media (max-width: 767px) {
					.wp-block-create-block-call-to-action-block {
						padding: ${sectionPad.mobile};
						margin: ${sectionMar.mobile};
					}
					.wp-block-create-block-call-to-action-block .hero-content .main-heading {
						font-size: ${headingFontSizeMobile || 24}px;
						line-height: ${headingLineHeightMobile || 1.4};
						padding: ${headingPad.mobile};
						margin: ${headingMar.mobile};
					}
					.wp-block-create-block-call-to-action-block .hero-content .description {
						font-size: ${descriptionFontSizeMobile || 14}px;
						line-height: ${descriptionLineHeightMobile || 1.6};
						padding: ${descPad.mobile};
						margin: ${descMar.mobile};
					}
					.wp-block-create-block-call-to-action-block .hero-content .cta-button {
						font-size: ${buttonFontSizeMobile || 13}px;
						line-height: ${buttonLineHeightMobile || 1.5};
						padding: ${buttonPad.mobile};
						margin: ${buttonMar.mobile};
					}
				}
			`}
        </style>
    );
};

export default Style;