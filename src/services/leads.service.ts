import { AppDataSource } from "../data-source";
import { LeadDto } from "../data/dto/leads.dto";
import { Lead } from "../models/leads.model";

async function cleanContent(json) {
    let jsonCleaned = JSON.stringify(json).replace(/\\/g, "").replace(/"{/g, "{").replace(/}"/g, "}");
    console.log(jsonCleaned);
    try {
        let leadDto: LeadDto = JSON.parse(jsonCleaned);
        console.log(JSON.stringify(leadDto));
        return leadDto;
    } catch (e) {
        console.log(e.toString());
        return null;
    }
}

async function addLead(lead: LeadDto) {
    const leadRepository = await AppDataSource.getRepository(Lead);
    return leadRepository.save(lead);
}

async function getLeads() {
    const leadRepository = await AppDataSource.getRepository(Lead)
    let leads: Lead[] = await leadRepository.find({});
    return leads;
}

module.exports = {
    cleanContent,
    getLeads,
    addLead
};