import { Client,Databases,Storage,ID,Query } from "appwrite";
import conf from "../conf/conf.js";

class Service{
    client=new Client();
    databases;
    storage;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl) 
            .setProject(conf.appwriteProjectId);     

        this.databases = new Databases(this.client)
        this.storage= new Storage(this.client)
    }

    async createPost({title,content,slug,userId,status,featuredImage}){
        try {
            const createdDocument = await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    userId,
                    status,
                    featuredImage
                }
            )
            return createdDocument
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug,{title,content,status,featuredImage}){
        try {
            const updatedPost = await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    status,
                    featuredImage
                }
            )
            return updatedPost
        } catch (error) {
            console.log('Service Error :: updatePost :: '+JSON.stringify(error));
            return false
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log('Service Error :: deletePost :: '+JSON.stringify(error));
            return false
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log('Service Error :: getPost :: '+JSON.stringify(error));
            return false
        }
    }

    async getPosts(){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                [
                    Query.equal("status","active")
                ]
            )
        } catch (error) {
            console.log('Service Error :: getPosts :: '+JSON.stringify(error));
            return false
        }
    }

    //working with files/featuredImage

    async uploadFile(file){
        try {
            return await this.databases.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log('Service Error :: uplodFile :: '+JSON.stringify(error));
            return false
        }
    }


    async deleteFile(fileId){
        try {
            return await this.databases.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log('Service Error :: deleteFile :: '+JSON.stringify(error));
            return false
        }
    }

    getFilePreview(fileId){
        try {
            return this.databases.getFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log('Service Error :: getFilePreview :: '+JSON.stringify(error));
            return false
        }
    }
}

export {Service}

const service = new Service();

export default service;