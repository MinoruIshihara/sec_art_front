import React, { useState } from 'react';
import { List, ListItem, ListItemText, TextField, Button } from '@mui/material';

function TagList() {
  const [tags, setTags] = useState(['風景', '人物', '食べ物']);
  const [newTag, setNewTag] = useState('');

  const handleAddTag = () => {
    if (newTag.trim() !== '') {
      setTags([...tags, newTag]);
      setNewTag('');
    }
  };

  const handleDeleteTag = (tagToDelete) => () => {
    setTags((prevTags) => prevTags.filter((tag) => tag !== tagToDelete));
  };

  return (
    <div>
      <List>
        {tags.map((tag) => (
          <ListItem
            key={tag}
            secondaryAction={
              <Button onClick={handleDeleteTag(tag)}>削除</Button>
            }
          >
            <ListItemText primary={tag} />
          </ListItem>
        ))}
      </List>
      <TextField
        label="新しいタグ"
        value={newTag}
        onChange={(e) => setNewTag(e.target.value)}
      />
      <Button onClick={handleAddTag}>追加</Button>
    </div>
  );
}

export default TagList;