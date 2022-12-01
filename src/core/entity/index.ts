export class Bookmark {
  private readonly id: string;

  private title: string;

  private href: string;

  private add_date: string;

  private icon: string;

  private readonly type = 'bookmark';

  private constructor(
    id: string,
    title: string,
    href: string,
    add_date: string,
    icon: string,
  ) {
    this.id = id;
    this.title = title;
    this.href = href;
    this.add_date = add_date;
    this.icon = icon;
  }

  update_add_date(add_date: string): void {
    this.add_date = add_date;
  }

  change_title(title: string): void {
    this.title = title;
  }

  change_href(href: string): void {
    this.href = href;
  }

  change_icon(icon: string): void {
    this.icon = icon;
  }

  public static createBookmark(
    id: string,
    title: string,
    href: string,
    add_date: string,
    icon: string,
  ): Bookmark {
    return new Bookmark(id, title, href, add_date, icon);
  }
}
