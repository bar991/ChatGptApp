import { chatGptService } from "../../../Services/ChatGptService";
import "./Chat.css";

export function Chat(): JSX.Element {
    function test(){
        const prompt = "Name 10 programing technologies";
        chatGptService.getCompletion(prompt)
        .then(completion => alert(completion))
        .catch(err => alert(err.message))
    }
    return (
        <div className="Chat">
            <form>
                <label>Job Interview Subject: </label>
                <input type="text" />
                <label>Number of Questions:</label>
                <input type="number" min="1" max="20" />
                <button type="button" onClick={test}>Get Questions</button>
            </form>
        </div>
    );
}
