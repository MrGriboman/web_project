import QuestInfo from "../objects/QuestInfo";
import Repository from "./Repository";

class QuestionnaireRepository extends Repository<QuestInfo, boolean> {
    constructor() {
        super("questionnaire");
    }

    async saveUserQuestionnaire(questInfo: QuestInfo) {
        let result = await super.postWithData("save", questInfo);
        console.log(result)
        return result;
    }
}

const authRepository = new QuestionnaireRepository();
export default authRepository;