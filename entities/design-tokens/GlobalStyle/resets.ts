import { colors } from "../../design-tokens/colors";
import {fonts} from "../../design-tokens/typography";


/**
 * @internal CSS reset, used setting up {@link @jagex/jds#GlobalStyle}.
 */
export const resets = `
    html, body {
      background: ${colors.greyDark};
      margin: 0;
      padding: 0;
    }

    html {
      box-sizing: border-box;
      color: ${colors.whiteGhost};
    }
    
    body {
      font-family: ${fonts.body};
    }

    *, *:before, *:after {
      box-sizing: inherit;
    }
  `;
