import { createGlobalStyle } from 'styled-components'
import { withPrefix } from 'gatsby'
import reset from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
  ${reset}

  @font-face { 
    font-family:'HangeulNuri';
    src: url(${withPrefix('fonts/HangeulNuriR.ttf')}) format('truetype');
  }

  @font-face { 
    font-family:'HangeulNuri';
    font-weight: 700;
    src: url(${withPrefix('fonts/HangeulNuriB.ttf')}) format('truetype');
  }

  @font-face { 
    font-family:'BMHANNAAir';
    src: url(${withPrefix('fonts/BMHANNAAir.ttf')}) format('truetype'),
         url(${withPrefix('fonts/BMHANNAAir.otf')}) format('opentype');
  }

  @font-face { 
    font-family:'BMHANNAPro';
    src: url(${withPrefix('fonts/BMHANNAPro.ttf')}) format('truetype'),
         url(${withPrefix('fonts/BMHANNAPro.otf')}) format('opentype');
  }
  html {
    font-size: 14px;

    body {
      height: 100%;
      margin: 0;
      padding: 0;
      font-family: 'HangeulNuri', 'Sans-serif';
      box-sizing: border-box;
      background: #f1f3f4;
    }

    a {
      color: black;
      text-decoration: none;
    }

    ul, li {
      list-style: none;
    }

    input {
      &:focus {
        outline: none;
      }
    }

    .Clearfix {
      &::after {
        display: block;
        content: "";
        clear: both;
      }
    }
  }
`

export default GlobalStyle
