import Xarrow from "react-xarrows";

type Props = {
    startElement: string;
    endElement: string;
    showTail?: boolean;
};

function Arrow({ startElement, endElement, showTail }: Props) {
    return (
        <Xarrow
            start={startElement}
            end={endElement}
            headSize={3}
            tailSize={3}
            headColor="fill-primary"
            lineColor="stroke-primary"
            tailColor="fill-primary"
            showTail={showTail}
        />
    );
}

export default Arrow;
