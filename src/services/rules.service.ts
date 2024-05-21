import { AppDataSource } from "../data-source";
import { LeadRuleDto } from "../data/dto/leadrule.dto";
import { Lead } from "../models/leads.model";
import { LeadRule } from "../models/rule.model";

async function getLeadRules() {
    const leadRuleRepository = await AppDataSource.getRepository(LeadRule)
    let leadRules: LeadRule[] = await leadRuleRepository.find({});
    return leadRules;
}

async function addLeadRule(lead: LeadRuleDto) {
    const leadRuleRepository = await AppDataSource.getRepository(LeadRule);
    return leadRuleRepository.save(lead);
}

module.exports = {
    getLeadRules,
    addLeadRule
};