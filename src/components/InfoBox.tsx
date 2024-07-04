import {type ReactNode} from 'react'

type HintBoxProps = {
  mode: 'hint';
  children: ReactNode;
}

type WarningBoxProps = {
  severity: 'low' | 'medium' | 'high';
  children: ReactNode;
  mode: 'warning';
};

type InfoBoxProps = HintBoxProps | WarningBoxProps;

export default function InfoBox(props: InfoBoxProps) {
  const {children, mode} = props;
  if (mode === 'hint') {
    return (
      <aside className="infoBox infobox-hint">
        <p>{children}</p>
      </aside>
    )
  }

  const {severity} = props;

  return (
    <aside className={`infoBox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
      <p>{children}</p>
    </aside>
  )
}