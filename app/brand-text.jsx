import { Fragment } from 'react';

export default function BrandText({ children }) {
  return children.split('seQmo.').map((part, index) => (
    <Fragment key={index}>
      {index > 0 && <>seQmo<span className="brand-dot">.</span></>}
      {part}
    </Fragment>
  ));
}
