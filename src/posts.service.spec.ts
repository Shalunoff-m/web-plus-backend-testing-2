import { PostsService } from './posts.service';

describe('PostsService', () => {
  let postsService: PostsService;

  beforeEach(() => {
    postsService = new PostsService();
  });

  describe('.findMany', () => {
    const posts = [
      { text: 'Post 1' },
      { text: 'Post 2' },
      { text: 'Post 3' },
      { text: 'Post 4' },
    ];

    beforeEach(() => {
      posts.forEach((post) => postsService.create(post));
    });

    it('should return all posts if called without options', () => {
      const posts = postsService.findMany();
      expect(posts.length).toBe(4);
    });

    it('should return correct posts for skip and limit options', () => {
      const posts = postsService.findMany({ skip: 1, limit: 2 });

      expect(posts).toHaveLength(2);
      expect(posts).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ text: 'Post 2', id: '2' }),
          expect.objectContaining({ text: 'Post 3', id: '3' }),
        ])
      );
    });

    it('should delete a post by id', () => {
      const postToDelete = postsService.create({ text: 'Delete this post' });
      expect(postsService.findMany().length).toBe(5); // Assuming 4 posts were initially created in beforeEach
      postsService.delete(postToDelete.id);
      expect(postsService.findMany().length).toBe(4);
      expect(postsService.find(postToDelete.id)).toBeUndefined();
    });

    // реализуйте недостающие тест-кейсы
  });
});
