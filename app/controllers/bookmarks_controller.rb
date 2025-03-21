class BookmarksController < ApplicationController
  before_action :set_list, only: [:new, :create]
  before_action :set_bookmark, only: :destroy

  def new
    @bookmark = Bookmark.new()
  end

  def create
    @bookmark = Bookmark.new(bookmark_params)
    @bookmark.list = @list
    if @bookmark.save
      redirect_to list_path(@list), notice: "Bookmark added!", status: :see_other
    else
      flash.now[:alert] = @bookmark.errors.full_messages.to_sentence
      @bookmarks = @list.bookmarks
      render "lists/show", status: :unprocessable_entity
    end
  end

  def destroy
    @bookmark.destroy!
    redirect_to list_path(@bookmark.list), status: :see_other
  end

  private

  def set_list
    @list = List.find(params[:list_id])
  end

  def set_bookmark
    @bookmark = Bookmark.find(params[:id])
  end

  def bookmark_params
    params.require(:bookmark).permit(:movie_id, :comment)
  end

end
