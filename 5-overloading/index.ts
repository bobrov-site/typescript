class User {
    skills: string[] = [];

    addSkill(skills: string[]): void;
    addSkill(skill: string) :void;
    addSkill(skillOrSkills: string | string[]): void {
        if (Array.isArray(skillOrSkills)) {
            this.skills.push(...skillOrSkills)
        }
        else {
            this.skills.push(skillOrSkills)
            // this.skills.concat(skillOrSkills)
        }
    }
}

const user = new User()
user.addSkill(['hello'])