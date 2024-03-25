import { useForm } from "react-hook-form";
import { ChatModel } from "../../../Models/ChatModel";
import { chatGptService } from "../../../Services/ChatGptService";
import { promptEngineering } from "../../../Services/promptEngineering";
import "./Chat.css";

export function Chat(): JSX.Element {
    const {register, handleSubmit} = useForm<ChatModel>();
    function send(chat: ChatModel) {

        const prompt = promptEngineering.getPrompt(chat.tech, chat.num);
        chatGptService.getCompletion(prompt)
            .then(completion => alert(completion))
            .catch(err => alert(err.message))

    }
    return (
        <div className="Chat">
            <form onSubmit={handleSubmit(send)}>
                <label>Job Interview Subject: </label>
                <input type="text" {...register("tech")}/>
                <label>Number of Questions:</label>
                <input type="number" min="1" max="20"  {...register("num")}/>
                <button>Get Questions</button>
            </form>
        </div>
    );
}
