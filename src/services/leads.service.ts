import { AppDataSource } from "../data-source";
import { LeadDto } from "../data/dto/leads.dto";
import { Lead } from "../models/leads.model";


export class LeadsService {

    constructor() {
    }

    async cleanContent(json) {
        let jsonCleaned = JSON.stringify(json.replace(/['"{}]+/g, "").replace(/[:]+/g, ":").replace(/,+/g, ";"));
        try {
            let leadDto: LeadDto = JSON.parse(jsonCleaned);
            let lead = this.addLead(leadDto);
            return lead;
        } catch (e) {
            return null;
        }
    }

    async addLead(lead: LeadDto) {
        const leadRepository = await AppDataSource.getRepository(Lead);
        return leadRepository.save(lead);
    }

    async getLeads() {
        const leadRepository = await AppDataSource.getRepository(Lead)
        let leads: Lead[] = await leadRepository.find({});
        return leads;
    }

}

module.exports = LeadsService;