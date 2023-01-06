
type iconConstructor = {
	viewBox: string;
	svg: React.SVGProps<SVGPathElement>;
};

type iconProps = {
	svg: string;
	classes?: string;
};

type Svgs = {
	[key: string]: Icons | null;
};

class Icons {
  viewBox: string;
  svg: JSX.Element | JSX.Element[];

	constructor({viewBox, svg}: iconConstructor) {
    this.viewBox = viewBox;
    this.svg = <> {svg} </>;
  }
}

const svgs: Svgs = {
	add: new Icons({
		viewBox: "0 0 24 24",
		svg: (
			<path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1 -10 10zm5-10a1 1 0 0 1 -1 1h-3v3a1 1 0 0 1 -2 0v-3h-3a1 1 0 0 1 0-2h3v-3a1 1 0 0 1 2 0v3h3a1 1 0 0 1 1 1z" />
		),
	}),

	default: null,
};

export const Icon = ({ svg, classes }: iconProps) => {

	const svgRender = svgs[svg] || svgs.default;

	return (
		<svg viewBox={svgRender?.viewBox} className={classes} xmlns="http://www.w3.org/2000/svg">
			{svgRender?.svg}
		</svg>
	);
};
