import { CodeBlock, CopyBlock, dracula } from "react-code-blocks";

export const CreateDateTime = (props) => {
    const dateTime = props.date;
    return (
        <>
            <time dateTime="03-09-2014">{dateTime}</time>
        </>
    );
}

export const CreateHeading = (props) => {
    // console.log(props.heading);

    return (
        <>
            <h1 className="heading">{props.heading}</h1>
        </>
    );
}

export const CreateSubHeading = (props) => {
    return (
        <>
            <h2 className="heading">{props.subHeading}</h2>
        </>
    );
}

export const CreateParagraph = (props) => {
    const paragraph = props.paragraph;
    return (
        <>
            <p>{paragraph}</p>
        </>
    );
}

export const CreateBlockQuote = (props) => {
    const blockquote = props.blockquote;
    return (
        <>
            <blockquote>
                <p>{blockquote}</p>
            </blockquote>
        </>
    );
}

export const CreateFigure = (props) => {
    const imgURL = props.url ? props.url : `/images/Home/bg1.jpg`;
    const imgCaption = props.caption;
    return (
        <>
            <figure className="size-2">
                <img src={imgURL} alt="about this" />
                <p className="caption">
                    {imgCaption}
                </p>
            </figure>
        </>
    );
}

export const CreateDividedElement = (props) => {

    return (
        <>
            <div className="divided">
                <div className="text">
                    <h3 className="subtitle">This is a subtitle Lorem ipsum dolor sit amet.
                        Lorem ipsum dolor sit amet consectetur.</h3>
                    <p>Scrimba is a platform for interactive coding screencast where
                        you can run the code at any moment in time.</p>
                </div>
                <figure className="size-1">
                    <img src="http://localhost:3000/images/Home/bg1.jpg" alt="about this" />
                    <p className="caption">
                        This is related to nothing
                    </p>
                </figure>
            </div>
        </>
    );
}

export const CreateCodeBlock = ({ code, language, showLineNumbers, startingLineNumber }) => {
    return (
        <CodeBlock
            text={code}
            language={language}
            showLineNumbers={showLineNumbers}
            startingLineNumber={startingLineNumber}
            theme={dracula}
        />
    );
}

export const CreateCopyBlock = ({ code, language, showLineNumbers, startingLineNumber }) => {
    return (
        <CopyBlock
            text={code}
            language={language}
            showLineNumbers={showLineNumbers}
            startingLineNumber={startingLineNumber}
            theme={dracula}
        />
    );
}