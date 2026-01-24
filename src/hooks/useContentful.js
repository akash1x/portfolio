import * as contentful from 'contentful'
import { contentfulConfig } from '../config/contentful'

const useContentful = () => {
    const client = contentful.createClient({
        space: contentfulConfig.space,
        environment: contentfulConfig.environment, // defaults to 'master' if not set
        accessToken: contentfulConfig.accessToken
    })

    const getAboutMe = async () => {

        try {
            const response = await client.getEntries({
                content_type: 'aboutMe',
            })

            const sanitizeData = response.items.map((item) => {
                return {
                    title: item.fields.title,
                    description: item.fields.description.content.map((node) => node.content.map((content) => content.value)),
                    profileImage: item.fields.profileImage.fields.file.url,
                }
            })
            return sanitizeData[0]
        } catch (error) {
            console.log(error)
        }

    }

    const getWorkExperiences = async () => {

        try {
            const response = await client.getEntries({
                content_type: 'workExperiences',
            })
            // items[0].fields.experienceRef[0].fields
            const sanitizeData = response.items.map((item) => {
                return item.fields.experienceRef.map((experience) => {
                    return {
                        company: experience.fields.company,
                        description: experience.fields.description.content.map((node) => node.content.map((content) => content.value)),
                        designation: experience.fields.designation,
                        period: experience.fields.period,
                    }
                })
            })
            return sanitizeData[0]
            // return response
        } catch (error) {
            console.log(error)
        }

    }

    const getTechnicalSkills = async () => {

        try {
            const response = await client.getEntries({
                content_type: 'technicalSkills',
            })

            const sanitizeData = response.items.map((item) => item.fields.skills)
            return sanitizeData[0]
            // return response
        } catch (error) {
            console.log(error)
        }

    }
    const getEducations = async () => {

        try {
            const response = await client.getEntries({
                content_type: 'academics',
            })

            const sanitizeData = response.items.map((item) => {
                return item.fields.educationRef.map((education) => {
                    return {
                        collge: education.fields.collge,
                        degree: education.fields.degree,
                        period: education.fields.period,
                    }
                })
            })
            return sanitizeData[0]
        } catch (error) {
            console.log(error)
        }

    }

    const getProjects = async () => {

        try {
            const response = await client.getEntries({
                content_type: 'petProjects',
            })

            const sanitizeData = response.items.map((item) => {
                return item.fields.projectsRef.map((project) => {
                    return {
                        description: project.fields.description.content.map((node) => node.content.map((content) => content.value)),
                        techStack: project.fields.techStack,
                        title: project.fields.title,
                    }
                })
            })
            return sanitizeData[0]
            // return response
        } catch (error) {
            console.log(error)
        }

    }

    return {
        getAboutMe,
        getTechnicalSkills,
        getEducations,
        getProjects,
        getWorkExperiences
    }
}

export default useContentful