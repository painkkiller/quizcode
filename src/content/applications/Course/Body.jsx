import { Interweave } from 'interweave';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';



function Body ({ body }) {

    if (!body) return 'Загрузка...';

    

    const renderType = (content) => {
        if (content.type === 'html') {
            return <Interweave content={content.text} />;
        } else if (content.type === 'javascript') {
            return (
                <SyntaxHighlighter language="javascript" style={docco}>
                    {content.text}
                </SyntaxHighlighter>
            );
        }
        return null;
    }

    if (Array.isArray(body)) {
        return body.map(item => renderType(item));
    } else {
        return <Interweave content={body.text} />
    }
}

export default Body;