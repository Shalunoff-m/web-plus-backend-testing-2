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
      // реализуйте тест-кейс
    });

    // реализуйте недостающие тест-кейсы
  });
});
