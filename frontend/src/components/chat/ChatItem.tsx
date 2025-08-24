import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
// ✅ use hljs themes (they exist in all installs)
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { vs2015 } from "react-syntax-highlighter/dist/esm/styles/hljs";

interface ChatItemProps {
  text: string;
}

const ChatItem = ({ text }: ChatItemProps) => {
  // Extract code blocks (```code```)
  const codeRegex = /```([\s\S]*?)```/g;
  const match = codeRegex.exec(text);

  if (match) {
    return (
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark} // ✅ works
        customStyle={{ borderRadius: "8px", padding: "12px" }}
      >
        {match[1]}
      </SyntaxHighlighter>
    );
  }

  return <p>{text}</p>;
};

export default ChatItem;

