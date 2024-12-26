import { Interweave } from 'interweave';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

function Body({ body }) {
  if (!body) return 'Загрузка...';

  const renderType = (content, i) => {
    if (content.type === 'html') {
      return <Interweave key={i} content={content.text} />;
    } else if (content.type === 'javascript') {
      return (
        <SyntaxHighlighter key={i} language="javascript" style={docco}>
          {content.text}
        </SyntaxHighlighter>
      );
    }
    return null;
  };

  if (Array.isArray(body)) {
    return body.map((item, i) => renderType(item, i));
  }
  return <Interweave content={body} />;
}

export default Body;
