import { c, html, css, Props } from "atomico";

function dsTitle({ element }: Props<typeof dsTitle.props>) {
  return html`<host shadowDom>
    <${element}><slot /></${element}>
  </host>`;
}

dsTitle.props = {
  element: {
    type: String,
    value: "h1",
  },
};

dsTitle.styles = css`
  :host {
    display: block;
    color: var(--color);
  }
  h1 {
    font-size: 10vh;
  }
`;

export const DsTitle = c(dsTitle);
customElements.define("ds-title", DsTitle);
