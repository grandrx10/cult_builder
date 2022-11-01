class Dialogue{
    constructor(dialogue, requirements){
        this.dialogue = dialogue
        this.requirements = requirements;
    }

    // ["dialogue", [["stat_requirement", "more/less", ""]]]
    check_requirements(cult_stats){
        if (this.requirements == null){
            return true
        }
        for (var i = 0; i < this.requirements.length; i ++){
            var requirement = this.requirements[i]
            if (requirement[1] == "add"){
                if (!(requirement[0] in cult_stats.stats)){
                    cult_stats.stats[requirement[0]] = requirement[2]
                }else {
                    cult_stats.stats[requirement[0]] += requirement[2]
                }
            } else {
                if (!(requirement[0] in cult_stats.stats)){
                    if ( requirement[2] > 0){
                        return false
                    } else {
                        return true
                    }
                }
                if (requirement[1] == "more"){
                    if (cult_stats.stats[requirement[0]] < requirement[2]){
                        return false
                    }
                } else {
                    if (cult_stats.stats[requirement[0]] > requirement[2]){
                        return false
                    }
                }
            }
        }
        return true
    }
}