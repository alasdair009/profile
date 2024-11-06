import { css } from "styled-components";

/**
 * Set the maximum number of lines of text an element can show.
 *
 * @param lineHeight - a unit of line height (pixel, em, rem etc)
 * @param numberOfLines - the number of lines to restrict to. Will not apply any if left undefined
 * @param verticalPadding - vertical padding of the element (top/bottom) in any unit (pixel, em, rem etc)
 */
export const lineClamp = (
  lineHeight: string,
  numberOfLines: number | undefined,
  verticalPadding = "0rem"
) => {
  if (!numberOfLines) {
    return css`
      line-height: ${lineHeight};
    `;
  }

  return css`
    line-height: ${lineHeight};
    max-height: calc(
      ${lineHeight} * ${numberOfLines} + (${verticalPadding} * 2)
    );
    overflow: hidden;
    border-bottom: ${verticalPadding} solid transparent;
    border-top: ${verticalPadding} solid transparent;
    padding-bottom: 0;
    padding-top: 0;
    text-overflow: ellipsis;
    word-break: break-word;

    @supports (-webkit-line-clamp: ${numberOfLines}) and (display: -webkit-box) {
      -webkit-box-orient: vertical;
      box-orient: vertical;
      display: -webkit-box;
      -webkit-line-clamp: ${numberOfLines};
      line-clamp: ${numberOfLines};
    }
  `;
};
