<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Artisan;

class Resource extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:res {model}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Make bootstrapped api resource';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $model = $this->argument('model');

        Artisan::call('make:resource', ['name' => "{$model}/{$model}Resource"]);
        Artisan::call('make:resource', ['name' => "{$model}/{$model}CreatedResource"]);
        Artisan::call('make:resource', ['name' => "{$model}/{$model}UpdatedResource"]);
        Artisan::call('make:resource', ['name' => "{$model}/{$model}Collection --collection"]);
    }
}
