package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Activity;
import com.example.demo.repository.ActivityRepository;

@Service
public class ActivityService {

    @Autowired
    private ActivityRepository repo;
    public Activity postActivity(Activity activity)
    {
        return repo.save(activity);
    }
    public List<Activity> getActivity()
    {
        return repo.findAll();
    }
    public void deleteActivity(int id)
    {
        repo.deleteById(id);
    }
    public Activity updateActivity(Activity activity)
    {
        return repo.saveAndFlush(activity);
    }
}
