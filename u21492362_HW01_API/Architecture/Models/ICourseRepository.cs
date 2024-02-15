namespace Architecture.Models
{
    public interface ICourseRepository
    {
        // Course
        Task<Course[]> GetAllCourseAsync();

		Task<Course> GetCourseAsync(int CourseId);

		Task<bool> SaveChangesAsync();
		void Add<T>(T entity) where T : class;
		void Delete<T>(T entity) where T : class;

	}
}
