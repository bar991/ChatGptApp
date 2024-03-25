import { Chat } from "../../ChatGptArea/Chat/Chat";
import "./Layout.css";

export function Layout(): JSX.Element {
    return (
        <div className="Layout">
			<h1>Chat Gpt for Programming  </h1>
            <hr />
            <Chat />
        </div>
    );
}
