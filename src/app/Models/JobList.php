<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class JobList extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'department_id',
        'ship_id',
        'typing_system_id',
        'component_name',
        'component_code',
        'part_name',
        'job_type',
        'job_name',
        'approved_job',
        'person_in_charge',
        'status',
        'level'
    ];
}
