export default interface CourseProps{
    Name: string,
    Description: string,
    LincPic?: string,
    IsPurchased: boolean,
    Progress?: number,
    CountLessonCompleted?: number,
    CountLessonAll: number,
}