#from player import Player
#from track import Track


class Player():
  def __init__(self,tracks, current=0):
    self.tracks=[]
    self.current=0

  def add(self,object):
    self.tracks.append(object) 
    return self.tracks
  
  def play(self):
    print ("Playing " + self.tracks[self.current].title + " by " + self.tracks[self.current].artist) 
	
  def next(self):
    if self.current == len(self.tracks)-1:  
      self.current=0
    else:
        self.current+= 1
   
  def previous(self):
    if self.current == 0:    
      self.current=len(self.tracks)-1
    else:
        self.current-= 1
  def selectTrack(self, location):
    track = self.tracks[location]
    return track

  def printTracksInfo(self):
    print (self.tracks)

class Track():
  def __init__(self, artist,title, album):
    self.artist= artist
    self.title=title
    self.album= album

  
player = Player("myPlayer")

track1 = Track("Incubus", "Drive", "Make Yourself")
track2 = Track("Ritchie Valens", "La Bamba", "La Bamba")
track3 = Track("Red Hot Chilli Peppers", "Californication", "Californication")

player.add(track1)
player.add(track2)
player.add(track3)

player.play()
player.next()
player.play()

 # directly select a track
player.selectTrack(1)
player.play()

# print out all tracks
player.printTracksInfo() #output is:  [<__main__.Track object at 0x10f693e48>, <__main__.Track object at 0x10f693eb8>, <__main__.Track object at 0x10f693ef0>]

