export default interface CourseProps{
    Id: number,
    Name: string,
    Description: string,
    LincPic?: string,
    IsPurchased: boolean,
    Progress?: number,
    CountLessonCompleted?: number,
    CountLessonAll: number,
}